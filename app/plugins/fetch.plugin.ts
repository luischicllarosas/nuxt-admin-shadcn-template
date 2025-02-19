import { createFetch } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
    const url = nuxtApp.$config.public.api_base;

    const apiFetch = createFetch({
        baseUrl: url,
        fetchOptions: {
            credentials: "include"
        }
    });

    //
    // nuxtApp.vueApp.component("DataTable", DataTable);

    // Inyectar una función global
    // nuxtApp.provide("fetcher", (mensaje: string) =>
    //     createFetch({
    //         baseUrl: url,
    //         fetchOptions: {
    //             credentials: "include"
    //         }
    //     })
    // );

    return {
        provide: {
            myFetch: apiFetch
        }
    };
});
