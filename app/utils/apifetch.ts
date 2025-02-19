import { createFetch } from "@vueuse/core";

const config = useRuntimeConfig();
const baseURL = config.public.api_base;

const apiFetch = createFetch({
    baseUrl: baseURL,
    fetchOptions: {
        credentials: "include"
    },
    options: {
        // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
        // async beforeFetch({ options }) {
        //     const myToken = await getMyToken();
        //     console.log("Fetching...");
        //     if (options.headers) {
        //         options.headers["Authorization"] = `Bearer ${myToken}`;
        //     }
        //     return { options };
        // },

        onFetchError(ctx) {
            const { data, error, response } = ctx;
            if (response) {
                const status = response.status;

                // if (status === 401) {
                //     // 1. Limpiar el LocalStorage (si lo usas)
                //     // LocalStorage.clear();
                //     console.log("Enviando a /login...");

                //     // 2. Redirigir al usuario a la página de login
                //     if (!window.location.pathname.includes("login")) {
                //         // Evita bucles de redirección

                //         window.location.href = window.location.origin + "/login";
                //     }

                //     // 3. Mostrar una notificación (opcional)
                //     // Notify.create({
                //     //     type: 'negative',
                //     //     message: 'Su sesión ha expirado. Por favor, inicie sesión de nuevo.'
                //     // });

                //     // 4.  Opcional: Lanzar el error para que lo capture otro manejador si es necesario
                //     // throw error; // Si deseas que el error se propague
                // } else if (status === 403) {
                //     //Ejemplo para 403 (Forbidden)
                //     //Manejo de error 403
                //     console.error("Error 403: Forbidden");
                //     // Opcional: Mostrar notificación, etc.
                // } else if (status >= 500) {
                //     // Ejemplo para errores de servidor
                //     console.error("Error de servidor:", error);
                //     // Opcional: Mostrar notificación, etc.
                // } else if (error) {
                //     // Manejo de otros errores de fetch
                //     console.error("Error de Fetch:", error);
                // }
            } else if (error) {
                //Errores de fetch (ejemplo: problemas de red)
                console.error("Error de Fetch:", error);
            }

            return ctx;
        }
    }
});

// function getMyToken() {
//     const token = LocalStorage.getItem("access_token");
//     return token;
// }

// function handleResponseStatus(ctx) {
//     console.log('Status :', status)

//     if (!window.location.pathname.includes('login') && status == 401) {
//         LocalStorage.clear()
//         window.location.href = window.location.origin + '/login'
//     } else if (status == 401) {
//         Notify.create({
//             type: 'negative',
//             message: 'Rate limit for the action has been exceeded. Please try again after some time.'
//         })
//     } else if (status == 410) {
//         // Notify.create({
//         //     type: 'negative',
//         //     message: 'Rate limit for the action has been exceeded. Please try again after some time.'
//         // })
//     } else {
//         Notify.create({
//             type: 'negative',
//             message: 'Oops, something went wrong. Please try again later.'
//         })
//     }
// }

export default apiFetch;
