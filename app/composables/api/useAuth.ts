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
    const { onFetchResponse, onFetchError } = apiFetch("/auth/logout").post();

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

export const useCheckSession = async () => {
    // const config = useRuntimeConfig();
    // const isAuthenticated = ref();
    // const checkAuth = ref();
    // const response = await $fetch(config.public.api_base + "/auth/session");
    // // const { response, data, head, text, onFetchResponse, onFetchError } = await apiFetch("/auth/session").get();
    // return { isAuthenticated, checkAuth };
    // try {
    //     const response = await $fetch(config.public.api_base + "/auth/session", {
    //         method: "GET",
    //         credentials: "include" // Enviar cookies con la solicitud
    //     });
    //     if (response.user) {
    //         this.user = response.user;
    //         this.isAuthenticated = true;
    //     } else {
    //         useLogout();
    //     }
    // } catch (error) {
    //     useLogout();
    // }
};
