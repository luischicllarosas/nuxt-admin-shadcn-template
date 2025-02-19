// plugins/auth.js
import { useState } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
    const authChecked = useState("authChecked", () => false);

    if (!authChecked.value) {
        // Verifica la sesión del usuario aquí
        // const user = await checkUserSession(); // Tu función para verificar la sesión

        // if (user) {
        //     // El usuario tiene una sesión activa
        //     nuxtApp.provide("user", user); // Proporciona la información del usuario globalmente
        // }

        authChecked.value = true;
    }
});
