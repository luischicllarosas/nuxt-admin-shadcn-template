export const useAuthStore = defineStore("Auth", {
    state: () => ({
        user: null as null | unknown,
        isAuthenticated: false,
        sessionChecked: false
    }),

    actions: {
        async checkSession() {
            try {
                const config = useRuntimeConfig()
                const baseURL = config.public.api_base
                const endSession = config.public.end_session

                const response = await $fetch(baseURL + endSession, {
                    method: "GET",
                    credentials: "include"
                })

                if (response) {
                    this.user = response
                    this.isAuthenticated = true
                } else {
                    this.logout()
                }
            } catch (error) {
                console.error("Error checking session:", error)
                this.logout()
            } finally {
                this.sessionChecked = true
            }
        },

        login(values: { email: string; password: string }, loading: Ref<boolean>) {
            const { $myFetch, $config } = useNuxtApp()
            const endLogin = $config.public.end_login

            loading.value = true

            const { data, onFetchResponse, onFetchError, onFetchFinally } = $myFetch(endLogin).post(values)

            onFetchResponse(() => {
                this.user = data.value
                this.isAuthenticated = true
                useSonner("Login successful.", {
                    description: "Welcome back."
                })
                navigateTo("/")
            })

            onFetchFinally(() => {
                loading.value = false
            })

            onFetchError(() => {
                useSonner("There was an error trying to log in.", {
                    description: "Check your credentials and try again."
                })
            })

            return { data }
        },

        async logout() {
            try {
                const { $config } = useNuxtApp()
                const endLogout = $config.public.end_logout
                const baseURL = $config.public.api_base

                await $fetch(baseURL + endLogout, {
                    method: "POST",
                    credentials: "include"
                })

                this.user = null
                this.isAuthenticated = false
                navigateTo("/login")
                useSonner("You logged out.", {
                    description: "Come back soon!."
                })
            } catch (error) {
                console.error("Error logging out:", error)
                useSonner("Error logging out, try again.", {
                    description: "Please try again."
                })
            }
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
