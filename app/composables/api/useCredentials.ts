import apiFetch from "~/utils/apifetch"
import type { CredentialT } from "~/types/Credentials.type"

export const useListCredentials = () => {
    return apiFetch("api/credentials/1").get()
}

export const getCredential = () => {
    return apiFetch<CredentialT>("api/credentials").get()
}

export const upsertCredentials = (values: { client_id: string; client_secret: string }, loading: Ref<boolean>) => {
    loading.value = true
    const responseApi = apiFetch("api/credentials/upsert").post(values)
    responseApi.onFetchResponse(() => {
        loading.value = false
    })
    return responseApi
}
export const newCredential = (values: { client_id: string; client_secret: string }) => {
    const responseApi = apiFetch("api/credentials").post(values)
    return { ...responseApi }
}
