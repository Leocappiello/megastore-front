import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import cookiesStorage from './cookies';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

type UserType = 'USER' | 'ADMIN' | null;

type State = {
    token: string
    userType: UserType;
}

type Actions = {
    setToken: (token: string) => void
    setUserType: (userType: UserType) => void;
}

// Configuración para el almacenamiento en cookies
const cookiesStorage = {
    getItem: (name: string) => {
        return getCookie(name) ?? null;
    },
    setItem: (name: string, value: string) => {
        setCookie(name, value, { expires: 1, secure: true, sameSite: 'Strict' });
    },
    removeItem: (name: string) => {
        removeCookie(name);
    }
};


// export const useAuthStore = create(persist<State & Actions>(
export const useAuthStore = create<State & Actions>((set) => ({
        token: '',
        userType: null,
        // setToken: (token: string) => set((state) => ({
        //     token
        // })),
        setToken: (token) => {
            // set({ token });
            setCookie('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
        },
        setUserType: (userType: UserType) => set({userType}),
        logout: () => {
            removeCookie('token');
            // localStorage.removeItem('token');
            // set({token: ''})
        }
}))