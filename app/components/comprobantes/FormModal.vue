<template>
    <div class="flex justify-center">
        <UiDialog v-model:open="open">
            <UiDialogContent class="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
                <UiDialogHeader class="contents space-y-0 text-left">
                    <UiDialogTitle class="border-b border-border px-6 py-4 text-base" title="Terms & Conditions" />
                </UiDialogHeader>
                <div class="overflow-y-auto">
                    <form @submit.prevent="onSubmit" ref="form_modal">
                        <!-- <UiDialogDescription> -->
                        <fieldset :disabled="isSubmitting" class="space-y-5 p-5">
                            <UiVeeSelect label="Afectación IGV" name="afectacion_igv">
                                <option disabled value="">Selecciona un tipo</option>
                                <option v-for="serie in afectacion_igv" :key="serie" :value="serie">
                                    {{ serie }}
                                </option>
                            </UiVeeSelect>
                            <div class="flex gap-5">
                                <!-- <UiVeeInput label="Cantidad" name="cantidad" type="number" /> -->
                                <UiVeeNumberField :min="0" label="Cantidad" name="cantidad">
                                    <UiNumberFieldInput placeholder="#" />
                                </UiVeeNumberField>
                                <!-- <UiVeeInput label="Unidad" name="unidad" /> -->
                                <UiVeeNumberField :min="0" label="Unidad" name="unidad">
                                    <UiNumberFieldInput placeholder="#" />
                                </UiVeeNumberField>
                                <UiVeeInput label="Código" name="codigo" />
                            </div>
                            <div>
                                <UiVeeInput label="Descripción" name="descripcion" />
                            </div>
                            <div class="ml-auto max-w-[200px]">
                                <!-- <UiVeeInput label="Valor Unitario" name="valor_unitario" /> -->
                                <UiVeeNumberField :min="0" label="Valor Unitario" name="valor_unitario">
                                    <UiNumberFieldInput placeholder="#" />
                                </UiVeeNumberField>
                                <UiVeeInput label="IGV" name="igv" />
                                <UiVeeInput label="Precio Unitario" name="precio_unitario" type="number" />
                                <UiVeeInput label="ISC" name="isc" />
                                <UiVeeInput label="ICBPER" name="icbper" />
                            </div>
                        </fieldset>
                        <!-- </UiDialogDescription> -->
                    </form>
                </div>
                <UiDialogFooter class="border-t border-border px-6 py-4 sm:items-center">
                    <UiDialogClose as-child>
                        <UiButton type="button" variant="outline"> Cancel </UiButton>
                    </UiDialogClose>
                    <UiButton @click="submitForm"> I agree </UiButton>
                </UiDialogFooter>
            </UiDialogContent>
        </UiDialog>
    </div>
</template>
<script lang="ts" setup>
    import { z } from "zod"

    const props = defineProps<{ open: boolean }>()
    const emits = defineEmits(["update:open"])
    const open = useVModel(props, "open", emits)

    const afectacion_igv = ["A", "B"]

    const schema = z.object({
        // afectacion_igv: z.string(),
        valor_unitario: z.number({ required_error: "Necesario" }).min(1),
        cantidad: z.number().min(1),
        // unidad: z.number().min(1),
        codigo: z.string(),
        descripcion: z.string()
        // igv: z.string(),
        // precio_unitario: z.number().min(1),
        // isc: z.string(),
        // icbper: z.string()
    })

    const { handleSubmit, isSubmitting, submitForm } = useForm({
        validationSchema: toTypedSchema(schema)
    })

    const onSubmit = handleSubmit(async (values) => {
        console.log(values)

        console.log("Workds")

        // quantity
        // code
        // description
        // unit_value
        // total
        // const promise = () => new Promise((resolve) => setTimeout(resolve, 3000))
        // useSonner.promise(promise, {
        //     loading: "Sending information to our servers...",
        //     success: (_) => "We updated your information.",
        //     error: (_) => "Error! Your information could not be sent to our servers!"
        // })
    })
</script>
