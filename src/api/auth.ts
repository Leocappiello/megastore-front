import axios, { isAxiosError } from 'axios';

export const loginReq = async (email: string | undefined, password: string | undefined) => {
    try {
        return axios.post('http://localhost:3000/auth/login', {
            username: email,
            password
        });
    } catch (error) {
        console.log(error, isAxiosError(error));
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data || 'Error desconocido' };
        } else {
            return { error: 'Error inesperado' };
        }
    }
}


export const signupReq = async (email: string | undefined, username: string | undefined, password: string | undefined) => {
    try {
        return axios.post('http://localhost:3000/users', {
            username,
            password,
            email
        });
    } catch (error) {
        console.log(error, isAxiosError(error));
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data || 'Error desconocido' };
        } else {
            return { error: 'Error inesperado' };
        }
    }
}