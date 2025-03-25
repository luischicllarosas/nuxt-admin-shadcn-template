export const useUserStore = defineStore("User", {
    state: () => ({
        currentLocale: "en" as string
    })
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
