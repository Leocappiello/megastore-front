import { getCookie, removeCookie, setCookie } from 'typescript-cookie';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserType = 'USER' | 'ADMIN' | null;

type State = {
    token: string
    userType: UserType;
}

type Actions = {
    logout: () => void;
    setToken: (token: string) => void;
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
// export const useAuthStore = create<State & Actions>((set) => ({
//         token: '',
//         userType: null,
//         setToken: (token) => {
//             setCookie('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
//         },
//         setUserType: (userType: UserType) => set({userType}),
//         logout: () => {
//             removeCookie('token');
//         }
//     }))
export const useAuthStore = create<State & Actions>(
    persist(
      (set) => ({
        token: null,
        userType: null,
        setToken: (token: string) => {
          set({ token });
          setCookie('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
        },
        setUserType: (userType: UserType) => set({ userType }),
        logout: () => {
          removeCookie('token');
          set({ token: null, userType: null });
        },
      }),
      {
        name: 'auth', // Nombre del almacenamiento
        getStorage: () => ({
          getItem: (key: string) => getCookie(key) ?? null,
          setItem: (key: string, value: string) => setCookie(key, value, { expires: 1 }),
          removeItem: (key: string) => removeCookie(key),
        }),
      }
    )
  );