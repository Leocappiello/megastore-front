import axios, { isAxiosError } from 'axios';

const BACK = import.meta.env.VITE_BACK_URL;

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BACK}products`);
        return response.data;
    } catch (error) {
        console.log(error, isAxiosError(error));
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data || 'Error desconocido' };
        } else {
            return { error: 'Error inesperado' };
        }
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await axios.get(`${BACK}products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error, isAxiosError(error));
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data || 'Error desconocido' };
        } else {
            return { error: 'Error inesperado' };
        }
    }
}

export const getAllProducts = async (token: string) => {
    console.log(token);
    try {
        const response = await axios.get(`${BACK}products/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error, isAxiosError(error));
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data || 'Error desconocido' };
        } else {
            return { error: 'Error inesperado' };
        }
    }
}
