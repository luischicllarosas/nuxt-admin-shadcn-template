export default defineNuxtRouteMiddleware((to) => {
    const authRoutes = ["/login", "/signup"];
    // const { isAuthenticated, checkAuth } = useAuth();
    // Excluye las rutas de inicio de sesión y registro
    // if (!authRoutes.includes(to.path)) {
    //     // Verifica si el usuario está autenticado
    //     if (!isAuthenticated.value) {
    //         return navigateTo("/login");
    //     }
    // }
});
