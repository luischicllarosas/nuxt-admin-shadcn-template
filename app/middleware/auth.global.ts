export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuthStore()
    const publicPages = ["/login", "/signup", "/forgot-password"]
    const isPublicPage = publicPages.includes(to.path)

    if (auth.isAuthenticated && isPublicPage && process.client) {
        return navigateTo("/")
    }

    if (!auth.isAuthenticated && !isPublicPage && process.client) {
        return navigateTo("/login")
    }
})
