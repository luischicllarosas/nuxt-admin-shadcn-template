<template>
    <UiCard>
        <!-- <UiPlaceholder class="h-[400px]">
            <UiButton text="Agregar" />
        </UiPlaceholder> -->
        <div class="overflow-y-auto">
            <div class="grid grid-cols-1 gap-5 md:flex md:items-center md:justify-between">
                <div class="flex flex-col">
                    <h1 class="font-semibold">Users</h1>
                    <p class="text-sm text-muted-foreground">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div>
                    <UiButton size="sm" @click="openForm = true">Agregar</UiButton>
                </div>
            </div>

            <div class="mt-10 [&>div]:max-h-[500px]">
                <UiTable>
                    <UiTableCaption>A list of your recent invoices.</UiTableCaption>
                    <UiTableHeader>
                        <UiTableRow>
                            <UiTableHead>Cantidad</UiTableHead>
                            <UiTableHead>Código</UiTableHead>
                            <UiTableHead>Descripción</UiTableHead>
                            <UiTableHead class="text-left">V.Unit</UiTableHead>
                            <UiTableHead class="text-left">Total</UiTableHead>
                        </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody class="last:border-b">
                        <template v-for="item in items" :key="item.id">
                            <UiTableRow>
                                <UiTableCell class="font-medium">
                                    <UiNumberField :min="1" :max="999" v-model:model-value="item.quantity" class="max-w-[120px]">
                                        <UiNumberFieldDecrement class="border-r" />
                                        <UiNumberFieldInput placeholder="#" />
                                        <UiNumberFieldIncrement class="border-l" />
                                    </UiNumberField>
                                </UiTableCell>
                                <UiTableCell>{{ item.code }}</UiTableCell>
                                <UiTableCell>{{ item.description }}</UiTableCell>
                                <UiTableCell class="text-left">{{ item.unit_value }}</UiTableCell>
                                <UiTableCell class="text-left">{{ item.total }}</UiTableCell>
                            </UiTableRow>
                        </template>
                    </UiTableBody>
                    <UiTableFooter>
                        <UiTableRow>
                            <UiTableCell colspan="3">Total</UiTableCell>
                            <!-- <UiTableCell class="text-right">{{ formatCurrency(total) }}</UiTableCell> -->
                        </UiTableRow>
                    </UiTableFooter>
                </UiTable>
                <div>
                    <div>
                        <UiLabel>Ope. Gravada</UiLabel>
                    </div>
                    <div>
                        <UiLabel>IGV</UiLabel>
                    </div>
                    <div>
                        <UiLabel>Redondeo</UiLabel>
                    </div>
                    <div>
                        <UiLabel>Importe Total</UiLabel>
                    </div>
                    <div>
                        <UiLabel>Forma de Pago</UiLabel>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <!-- <UiCardFooter class="flex justify-between">
                        <UiButton type="reset" variant="outline">Cancel</UiButton>
                        <UiButton type="submit">Deploy</UiButton>
                    </UiCardFooter> -->
        </template>
    </UiCard>
    <LazyComprobantesFormModal v-model:open="openForm" @add-list="onAddList" />
</template>

<script lang="ts" setup>
    // import { faker } from "@faker-js/faker"
    const openForm = ref(false)
    const items = ref([
        {
            quantity: 1,
            code: "79634598",
            description: "The maroon Computer combines Burundi aesthetics with Nickel-based durability",
            unit_value: 1,
            total: 1
        },
        {
            quantity: 1,
            code: "79172844",
            description: "Generic Pants designed with Ceramic for spotless performance",
            unit_value: 1,
            total: 1
        }
    ])

    const onAddList = (item: (typeof items.value)[0]) => {
        items.value.push(item)
    }

    const total = computed(() => {
        // return invoices.value?.reduce((acc, invoice) => acc + invoice.totalAmount, 0)
    })

    const formatCurrency = (value: number = 0) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(value)
    }
</script>
