import { createFetch } from "@vueuse/core"

export default defineNuxtPlugin((nuxtApp) => {
    const url = nuxtApp.$config.public.api_base

    const apiFetch = createFetch({
        baseUrl: url,
        fetchOptions: {
            credentials: "include"
        }
    })

    return {
        provide: {
            myFetch: apiFetch
        }
    }
})
