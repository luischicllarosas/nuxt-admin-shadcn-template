import { createFetch } from "@vueuse/core";

const config = useRuntimeConfig();

const base_url = config.public.API_BASE_URL;

const apiFetch = createFetch({
    baseUrl: base_url,
    options: {
        // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
        // async beforeFetch({ options }) {
        //     const myToken = await getMyToken();
        //     console.log("Fetching...");
        //     if (options.headers) {
        //         options.headers["Authorization"] = `Bearer ${myToken}`;
        //     }
        //     return { options };
        // },
        // onFetchError(ctx) {
        //     if (ctx.response) {
        //         console.log(ctx);
        //         const status = ctx.response.status;
        //         const data = ctx.data;
        //         if (!window.location.pathname.includes("login") && status == 401) {
        //             LocalStorage.clear();
        //             window.location.href = window.location.origin + "/login";
        //         } else if (status >= 200 && status < 299) {
        //             //
        //         } else if (status == 401) {
        //             Notify.create({
        //                 type: "negative",
        //                 message: "Rate limit for the action has been exceeded. Please try again after some time."
        //             });
        //         } else if (status == 410) {
        //             Notify.create({
        //                 type: "warning",
        //                 message: data.error
        //             });
        //         } else {
        //             Notify.create({
        //                 type: "negative",
        //                 message: "Oops, something went wrong. Please try again later."
        //             });
        //         }
        //     }
        //     return ctx;
        // }
    }
});

// function getMyToken() {
//     const token = LocalStorage.getItem("access_token");
//     return token;
// }

// function handleResponseStatus(ctx) {
//     console.log('Status :', status)

//     if (!window.location.pathname.includes('login') && status == 401) {
//         LocalStorage.clear()
//         window.location.href = window.location.origin + '/login'
//     } else if (status == 401) {
//         Notify.create({
//             type: 'negative',
//             message: 'Rate limit for the action has been exceeded. Please try again after some time.'
//         })
//     } else if (status == 410) {
//         // Notify.create({
//         //     type: 'negative',
//         //     message: 'Rate limit for the action has been exceeded. Please try again after some time.'
//         // })
//     } else {
//         Notify.create({
//             type: 'negative',
//             message: 'Oops, something went wrong. Please try again later.'
//         })
//     }
// }

export default apiFetch;
