// nextjs-app/pages/signup.tsx
'use client'
import { useState } from 'react';
import loginApi from '../Api/loginApi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.username) newErrors.username = 'Username is required';
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
      const response = await loginApi.signup(formData.username, formData.password, formData.email); // Call the signup method
      setMessage(response.message);
      setFormData({ username: '', email: '', password: '' }); // Reset form
      setErrors({ username: '', email: '', password: '' });
      router.push('/login');
    } catch (error) {
      setMessage('Error signing up');
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
      <div className='w-24 h-[10rem]'>
        <Image width={300} height={100} src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDJ2amx0MXVtdXI3dWJkNDQ1d2JxZzJybjBzMGVja211YjMwdmlsNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MZ7yrimhG3DThJqHjl/giphy.gif"} alt='Best Tshirt in India' />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;