import { z } from "zod"

export const CredentialSchema = z.object({
    client_id: z
        .string({ required_error: "Client ID, campo necesario" })
        .min(20, "Client ID debe tener más 3 caracteres")
        .max(40, "Client ID debe tener máxcimo 20 caracteres"),

    client_secret: z
        .string({ required_error: "Client Secret, campo necesario" })
        .min(20, "Client ID debe tener más 3 caracteres")
        .max(40, "Client ID debe tener máxcimo 20 caracteres")
})

export type CredentialT = z.infer<typeof CredentialSchema>
