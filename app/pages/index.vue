<template>
    <div class="mx-auto flex w-full max-w-lg items-center justify-center">
        <form class="w-full space-y-4" @submit="onSubmit">
            <Field v-slot="{ componentField }" name="client_id">
                <UiFormItem label="Client ID" description="Others will be able to see this">
                    <UiInput v-bind="componentField" />
                </UiFormItem>
            </Field>
            <Field v-slot="{ componentField }" name="client_secret">
                <UiFormItem label="Client Secret" description="Others will be able to see this">
                    <UiInput v-bind="componentField" />
                </UiFormItem>
            </Field>
            <div>
                <UiButton type="submit">Guardar</UiButton>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import schema from "zod";

    const { handleSubmit } = useForm({
        validationSchema: toTypedSchema(
            schema.object({
                client_id: schema
                    .string({ required_error: "Client ID, campo necesario" })
                    .min(5, "Client ID debe tener más 3 caracteres")
                    .max(20, "Client ID debe tener máxcimo 20 caracteres"),

                client_secret: schema
                    .string({ required_error: "Client Secret, campo necesario" })
                    .min(5, "Client ID debe tener más 3 caracteres")
                    .max(20, "Client ID debe tener máxcimo 20 caracteres")
            })
        )
    });

    const onSubmit = handleSubmit((values) => {
        // alert(JSON.stringify(values, null, 2));
        const {} = newCredential(values);
    });
</script>
