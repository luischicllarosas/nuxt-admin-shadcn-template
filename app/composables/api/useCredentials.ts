import type { CredentialT } from "~/types/Credentials.type"

const { $myFetch, $config } = useNuxtApp()

export const useListCredentials = () => {
    return $myFetch("api/credentials/1").get()
}

export const getCredential = () => {
    return $myFetch<CredentialT>("api/credentials").get()
}

export const upsertCredentials = (values: { client_id: string; client_secret: string }, loading: Ref<boolean>) => {
    loading.value = true
    const responseApi = $myFetch("api/credentials/upsert").post(values)
    responseApi.onFetchResponse(() => {
        loading.value = false
    })
    return responseApi
}
export const newCredential = (values: { client_id: string; client_secret: string }) => {
    const responseApi = $myFetch("api/credentials").post(values)
    return { ...responseApi }
}
