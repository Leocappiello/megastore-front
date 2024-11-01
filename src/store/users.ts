import { create } from "zustand";
import { getUsers } from "../api/users";

type State = {
    users: any[];
};

type Actions = {
    fetchUsers: () => Promise<void>;
};

export const useUsersStore = create<State & Actions>((set) => ({
    users: [], // Inicialmente vacío

    fetchUsers: async () => {
        const response = await getUsers();
        if (response && !response.error) {
            set({ users: response }); // Asumiendo que los usuarios vienen directamente
        } else {
            console.error(response.error); // Manejo de errores
        }
    }
}));
