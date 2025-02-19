// import { useFetch } from "@vueuse/core";

import apiFetch from "~/utils/apifetch";

export const useLogin = (values: { email: string; password: string }) => {
    const { response, data, head, text, onFetchResponse, onFetchError } = apiFetch("/auth/login").post(values);

    onFetchResponse(() => {
        useSonner("Logged in successfully!", {
            description: "You have successfully logged in."
        });
        navigateTo("/");
    });
    onFetchError(() => {
        useSonner("Hubo un error al intentar iniciar sesión.", {
            description: "Revisa tus credenciales e intenta de nuevo."
        });
    });
};

export const useLogout = () => {
    const { onFetchResponse, onFetchError } = apiFetch("/auth/logout").get();

    onFetchResponse(() => {
        // useSonner("Logout ", {
        //     description: "You have successfully logged in."
        // });
        navigateTo("/login");
    });
    onFetchError(() => {
        // useSonner("Hubo un error al intentar iniciar sesión.", {
        //     description: "Revisa tus credenciales e intenta de nuevo."
        // });
    });
};

export const useCheckSession = () => {
    const isAuthenticated = ref();
    const checkAuth = ref();

    return { isAuthenticated, checkAuth };
};
