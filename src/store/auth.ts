import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserType = 'USER' | 'ADMIN' | null;

type State = {
    token: string
    userType: UserType;
}

type Actions = {
    setToken: (token: string) => void
    setUserType: (userType: UserType) => void;
}


export const useAuthStore = create(persist<State & Actions>(
    (set) => ({
        token: '',
        setToken: (token: string) => set((state) => ({
            token
        })),
        setUserType: (userType: UserType) => set({userType}),
        logout: () => {
            localStorage.removeItem('token');
            set({token: ''})
        }
}), {
    name: 'auth'
}
))