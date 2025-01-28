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
        const response = await axios.post(`/${API_BASE_URL}/register`, {
            name,
            password,
            email,
        });
        return response.data;
    }

}

const loginApi = new LoginApi();
export default loginApi;