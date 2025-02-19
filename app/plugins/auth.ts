import { useFetch as myFetch } from "@vueuse/core";
import { useState } from "#app";

// export default defineNuxtPlugin(async (nuxtApp) => {
//     const authChecked = useState("authChecked", () => false);

//     if (!authChecked.value) {
//         const config = useRuntimeConfig();

//         // Verifica la sesión del usuario aquí
//         // const user = await useCheckSession(); // Tu función para verificar la sesión
//         // try {

//         const { error, onFetchError, onFetchFinally } = myFetch(config.public.api_base + "auth/session").get();
//         onFetchError(async () => {
//             //
//             console.log(error.value);
//             const errText = await error.value.response.text();
//             console.log(errText);
//         });
//         onFetchFinally(async () => {
//             //
//             console.log(error.value);
//             const errText = await error.value.response.text();
//             console.log(errText);
//             useSonner("Logout ", {
//                 description: "Hey"
//             });
//         });
//         // console.log(response.value);
//         // console.log(data.value);
//         // console.log(await text());

//         // $fetch(config.public.api_base + "auth/session")
//         //     .then((res) => {
//         //         console.log(res);
//         //     })
//         //     .catch((error) => {
//         //         const text = error.response._data || "";
//         //     })
//         //     .finally(() => {
//         //         useSonner("Logout ", {
//         //             description: "Hey"
//         //         });
//         //         // console.log();
//         //     });
//         // } catch (error) {
//         //     console.log(error);

//         // }
//         // if (user) {
//         //     // El usuario tiene una sesión activa
//         //     nuxtApp.provide("user", user); // Proporciona la información del usuario globalmente
//         // }

//         authChecked.value = true;
//     }
// });

export default defineNuxtPlugin(async (nuxtApp) => {
    const authChecked = useState("authChecked", () => false);
    const authStore = useAuthStore();
    await authStore.checkSession();

    nuxtApp.hooks.hook("app:mounted", async () => {
        // Espera a la hidratación
        if (!authChecked.value) {
            const config = useRuntimeConfig();

            // try {
            //     const user = await $fetch(config.public.api_base + "auth/session");
            //     nuxtApp.provide("user", user);
            // } catch (error) {
            //     useSonner("Hubo un error al intentar iniciar sesión.", {
            //         description: "Su sesión ha expirado o no es válida. Por favor, inicie sesión de nuevo."
            //     });
            // if (error.response && error.response.status === 401) {
            //     // Manejar el error 401 aquí (redirigir, limpiar localStorage, etc.)
            //     localStorage.clear();
            //     window.location.href = window.location.origin + "/login";
            // } else {
            //     // Manejar otros errores
            //     console.error("Error al verificar la sesión:", error);
            // }
            // }

            authChecked.value = true;
        }
    });
});
