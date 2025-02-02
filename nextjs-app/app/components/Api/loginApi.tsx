import axios from 'axios';
const API_BASE_URL = 'api/auth';

class LoginApi {
    async login(email: any, password: string) {
        const response = await axios.post(`/${API_BASE_URL}/login`, {
            email,
            password,
        });
        return response.data;
    }

    async logout() {
        const response = await axios.post(`/${API_BASE_URL}/logout `);
        return response.data;
    }

    async signup(name: string, password: string, email: string) {
        try {
            console.log('Sending signup request...');
            const response = await axios.post(`${API_BASE_URL}/register`, {
                name,
                password,
                email,
            });
            console.log('Signup response:', response.data);
            return response.data;
        } catch (error:any) {
            console.error('Signup error:', error.response?.data || error.message);
            throw error;
        }
    }
    

}

const loginApi = new LoginApi();
export default loginApi;