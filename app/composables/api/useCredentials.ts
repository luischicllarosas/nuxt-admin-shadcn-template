import apiFetch from "~/utils/apifetch";

export const useListCredentials = () => {
    return apiFetch("api/credentials/1").get();
};

export const newCredential = (values: { client_id: string; client_secret: string }) => {
    return apiFetch("api/credentials").post(values);
};
