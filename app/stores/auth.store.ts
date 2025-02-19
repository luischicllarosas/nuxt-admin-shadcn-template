export const useAuthStore = defineStore("Auth", {
    state: () => ({
        user: null as null | unknown,
        isAuthenticated: false,
        sessionChecked: false // Nueva bandera para saber si ya verificamos la sesión
    }),

    actions: {
        async checkSession() {
            try {
                const config = useRuntimeConfig();
                const baseURL = config.public.api_base;
                const response = await $fetch(baseURL + "auth/session", {
                    method: "GET",
                    credentials: "include"
                });

                if (response) {
                    this.user = response;
                    this.isAuthenticated = true;
                } else {
                    this.logout();
                }
            } catch (error) {
                this.logout();
            } finally {
                this.sessionChecked = true; // Se ha verificado la sesión, evitar llamadas innecesarias
            }
        },
        /**
         ** Auth methods ^
         */
        async login(values: { email: string; password: string }) {
            const { $myFetch } = useNuxtApp();

            const { data, onFetchResponse, onFetchError } = $myFetch("auth/login").post(values);

            onFetchResponse(() => {
                this.user = data.value;
                this.isAuthenticated = true;
                navigateTo("/");
            });

            onFetchError(() => {
                useSonner("Hubo un error al intentar iniciar sesión.", {
                    description: "Revisa tus credenciales e intenta de nuevo."
                });
            });
        },
        async logout() {
            const config = useRuntimeConfig();
            const baseURL = config.public.api_base;
            //
            await $fetch(baseURL + "auth/logout", {
                method: "POST",
                credentials: "include"
            });

            this.user = null;
            this.isAuthenticated = false;
            navigateTo("/login");
        }
    }
});
