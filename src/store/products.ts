import { create } from "zustand";
import { getAllProducts, getProductById, getProducts } from "../api/products";

type State = {
    product: any;
    products: any[];
    allProducts: any[],
};

type Actions = {
    fetchProducts: () => Promise<void>;
    fetchAllProducts: (token: string) => Promise<void>;
};

export const useProductsStore = create<State & Actions>((set) => ({
    product: {},
    products: [],
    allProducts: [],

    fetchProductById: async (id: string) => {
        const response = await getProductById(id);
        if (response && !response.error) {
            set({ product: response });
        } else {
            console.error(response.error);
        }
    },

    fetchProducts: async () => {
        const response = await getProducts();
        if (response && !response.error) {
            set({ products: response });
        } else {
            console.error(response.error);
        }
    },

    fetchAllProducts: async (token: string) => {
        const response = await getAllProducts(token);
        if (response && !response.error) {
            set({ allProducts: response });
        } else {
            console.error(response.error);
        }
    }
}));
