import axios, { isAxiosError } from 'axios';

export const getUsers = async () => {
    const BACK = import.meta.env.VITE_BACK_URL;
    console.log(BACK);
    try {
        const response = await axios.get(`${BACK}users/`);
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
