// export default defineNuxtRouteMiddleware((to, from) => {
//     const authRoutes = ["/login", "/signup"];
//     const auth = useAuthStore();
//     // const { isAuthenticated, checkAuth } = useAuth();
//     // Excluye las rutas de inicio de sesión y registro
//     if (!authRoutes.includes(to.path)) {
//         //     console.log("Middleware?");

//         // Verifica si el usuario está autenticado
//         console.log(auth.isAuthenticated);

//         if (!auth.isAuthenticated) {
//             console.log("Middleware Auth");
//             return navigateTo("/login");
//         }
//     }
// });

// import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore();

    // Páginas públicas que NO necesitan verificación de sesión
    const publicPages = ["/login", "/signup", "/forgot-password"];

    // Si la sesión aún no se ha verificado, ejecutar `checkSession()`
    if (!auth.isAuthenticated && !auth.sessionChecked) {
        auth.checkSession().then(() => {
            if (auth.isAuthenticated && publicPages.includes(to.path)) {
                return navigateTo("/"); // Si está logueado, no debería ver login/signup
            }
        });
    }

    // Si intenta acceder a una página privada sin sesión, redirigir a login
    if (!auth.isAuthenticated && !publicPages.includes(to.path)) {
        return navigateTo("/login");
    }

    // Si ya está autenticado y visita login/signup, enviarlo al dashboard
    if (auth.isAuthenticated && publicPages.includes(to.path)) {
        return navigateTo("/");
    }
});
