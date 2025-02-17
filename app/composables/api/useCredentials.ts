import apiFetch from "~/utils/apifetch";

export const newCredential = (values: { client_id: string; client_secret: string }) => {
    return apiFetch("/credentials").post(values);
};
