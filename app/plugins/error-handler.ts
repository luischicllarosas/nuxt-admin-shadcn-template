export default defineNuxtPlugin((nuxtApp) => {
    console.log("Plugin error-handler.ts has been called");

    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // handle error, e.g. report to a service
        console.log("Houston, we have a problem!");
    };

    // Also possible
    nuxtApp.hook("vue:error", (error, instance, info) => {
        // handle error, e.g. report to a service
        console.log("Houston, we have a problem!");
    });
});
