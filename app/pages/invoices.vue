<template>
    <form class="mx-auto" @submit="onSubmit">
        <fieldset :disabled="isSubmitting" class="space-y-5">
            <div class="flex gap-5">
                <UiVeeSelect label="Comprobante" name="comprobante">
                    <option disabled value="">Selecciona un tipo</option>
                    <option v-for="country in comprobantes" :key="country" :value="country">
                        {{ country }}
                    </option>
                </UiVeeSelect>
                <UiVeeSelect label="Serie" name="serie">
                    <option disabled value="">Selecciona un tipo</option>
                    <option v-for="serie in series" :key="serie" :value="serie">
                        {{ serie }}
                    </option>
                </UiVeeSelect>
                <UiVeeInput label="Correlativo" name="correlativo" />
                <UiVeeSelect label="Moneda" name="currency">
                    <option disabled value="">Selecciona un tipo</option>
                    <option v-for="currency in currencies" :key="currency" :value="currency">
                        {{ currency }}
                    </option>
                </UiVeeSelect>
                <UiVeeDatepicker
                    :date-picker-props="{
                        mode: 'date'
                    }"
                    readonly
                    placeholder="MM/DD/YYYY"
                    label="Fecha Emision"
                    name="date_start"
                />
                <UiVeeDatepicker
                    :date-picker-props="{
                        mode: 'date'
                    }"
                    readonly
                    placeholder="MM/DD/YYYY"
                    label="Fecha Vencimiento"
                    name="date_end"
                />
            </div>
            <div class="flex gap-5">
                <UiVeeSelect label="Operacion" name="transaction">
                    <option disabled value="">Selecciona un tipo</option>
                    <option v-for="transaction in transactions" :key="transaction" :value="transaction">
                        {{ transaction }}
                    </option>
                </UiVeeSelect>
                <!-- <div class="flex w-full">
                    <div>
                        <UiLabel>Cliente</UiLabel>
                        <UiCombobox />
                    </div>
                </div> -->
            </div>
            <!-- <UiCard class="" title="Create project" description="Deploy your new project in one-click."> -->
            <ComprobantesItemsTable />

            <UiButton type="submit"> Submit </UiButton>
        </fieldset>
    </form>
</template>

<script lang="ts" setup>
    import { z } from "zod"

    const comprobantes = ["Factura", "Boleta"]
    const series = ["F0001", "F0002"]
    const currencies = ["Soles", "Dolares"]
    const transactions = ["Venta Interna", "Exportacion de Bienes"]

    const schema = z.object({
        name: z.string(),
        email: z.string(),
        age: z.string(),
        country: z.string({ required_error: "Required" }).refine((value) => comprobantes.includes(value)),
        startDate: z.date({
            invalid_type_error: "Please enter a valid date",
            required_error: "Please enter a date"
        }),
        transaction: z.string(),
        combobox: z.string()
    })

    const { handleSubmit, isSubmitting } = useForm({
        validationSchema: toTypedSchema(schema)
    })

    const onSubmit = handleSubmit(async (values) => {
        // const promise = () => new Promise((resolve) => setTimeout(resolve, 3000))
        // useSonner.promise(promise, {
        //     loading: `Updating to ${values.startDate}`,
        //     success: (_) => "We updated your information.",
        //     error: (_) => "Error! Your information could not be sent to our servers!"
        // })
    })
</script>
