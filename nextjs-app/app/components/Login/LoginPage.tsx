'use client';
import { useState } from 'react';
import api from '../Api/loginApi'; // Adjust the import path as necessary
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await api.login(formData.email, formData.password);
      setMessage(response.message);
      setFormData({ email: '', password: '' });
      setErrors({ email: '', password: '' });
      router.push('/dashboard');
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email" // Ensures the field is linked to the `email` state
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password" // Ensures the field is linked to the `password` state
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Log In
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-green-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
