<template>
    <div class="mx-auto flex w-full max-w-lg items-center justify-center">
        <form class="w-full space-y-4" @submit="onSubmit">
            <Field v-slot="{ componentField }" name="client_id">
                <UiFormItem label="Client ID" description="Others will be able to see this">
                    <UiInput v-bind="componentField" v-model:model-value="credentials.client_id" />
                </UiFormItem>
            </Field>
            <Field v-slot="{ componentField }" name="client_secret">
                <UiFormItem label="Client Secret" description="Others will be able to see this">
                    <UiInput v-bind="componentField" v-model:model-value="credentials.client_secret" />
                </UiFormItem>
            </Field>
            <div>
                <UiButton type="submit" :loading="loading">Guardar</UiButton>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
    import { CredentialSchema } from "~/types/Credentials.type"

    const credentials = reactive({
        client_id: "",
        client_secret: ""
    })
    const loading = ref(false)

    const { data, isFetching, onFetchResponse } = getCredential()
    onFetchResponse(() => {
        credentials.client_id = data.value ? data.value.client_id : ""
        credentials.client_secret = data.value ? data.value.client_secret : ""
    })

    const { handleSubmit } = useForm({
        validationSchema: toTypedSchema(CredentialSchema)
    })

    const onSubmit = handleSubmit((values) => {
        // alert(JSON.stringify(values, null, 2));
        const { data } = upsertCredentials(values, loading)
    })
</script>
