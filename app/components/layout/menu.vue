<template>
    <aside class="h-screen w-[300px] border-r">
        <UiScrollArea class="size-full">
            <div class="flex h-screen flex-col pt-7">
                <NuxtLink to="#" class="flex w-full items-center gap-3 px-5">
                    <UiAvatar src="/icon.png" alt="Company Logo" class="size-7 rounded object-contain" />
                    <span class="text-xl font-bold">My Company</span>
                </NuxtLink>
                <div class="my-6 px-5">
                    <UiVeeInput v-model="search" placeholder="Search..." icon="lucide:search" />
                </div>
                <div class="flex h-full grow flex-col px-5 pb-8">
                    <div class="mb-10 flex flex-col gap-10">
                        <nav class="flex flex-col gap-1">
                            <template v-for="(n, i) in topNav" :key="i">
                                <UiButton v-if="!n.items" :to="n.link" size="default" variant="ghost" class="justify-start gap-4 px-3">
                                    <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                                    <span>{{ n.title }}</span>
                                </UiButton>
                                <UiCollapsible v-if="n.items">
                                    <UiCollapsibleTrigger as-child>
                                        <UiButton size="default" variant="ghost" class="group w-full justify-start gap-4 px-3">
                                            <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                                            <span>{{ n.title }}</span>
                                            <Icon
                                                name="lucide:chevron-down"
                                                class="ml-auto size-4 text-muted-foreground transition group-data-[state=open]:rotate-180"
                                            />
                                        </UiButton>
                                    </UiCollapsibleTrigger>
                                    <UiCollapsibleContent class="flex flex-col gap-1.5 pl-4 pr-2">
                                        <template v-for="(item, index) in n.items" :key="index">
                                            <UiButton :to="item.link" size="sm" variant="ghost" class="justify-start gap-4 px-3">
                                                <span>{{ item.title }}</span>
                                            </UiButton>
                                        </template>
                                    </UiCollapsibleContent>
                                </UiCollapsible>
                            </template>
                        </nav>
                        <nav class="mt-auto flex flex-col gap-1">
                            <template v-for="(n, i) in bottomNav" :key="i">
                                <UiButton v-if="!n.items" :to="n.link" size="default" variant="ghost" class="justify-start gap-4 px-3">
                                    <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                                    <span>{{ n.title }}</span>
                                </UiButton>
                                <UiCollapsible v-if="n.items">
                                    <UiCollapsibleTrigger as-child>
                                        <UiButton size="default" variant="ghost" class="group w-full justify-start gap-4 px-3">
                                            <Icon v-if="n.icon" :name="n.icon" class="size-4 text-muted-foreground" />
                                            <span>{{ n.title }}</span>
                                            <Icon
                                                name="lucide:chevron-down"
                                                class="ml-auto size-4 text-muted-foreground transition group-data-[state=open]:rotate-180"
                                            />
                                        </UiButton>
                                    </UiCollapsibleTrigger>
                                    <UiCollapsibleContent class="flex flex-col gap-1.5 pl-4 pr-2">
                                        <template v-for="(item, index) in n.items" :key="index">
                                            <UiButton :to="item.link" size="sm" variant="ghost" class="justify-start gap-4 px-3">
                                                <span>{{ item.title }}</span>
                                            </UiButton>
                                        </template>
                                    </UiCollapsibleContent>
                                </UiCollapsible>
                            </template>
                        </nav>
                    </div>
                    <!-- <div class="mt-auto rounded-lg bg-muted/50 p-4 text-sm">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold">Used space</p>
                            <UiButton class="size-6" size="icon-sm" variant="ghost">
                                <Icon name="lucide:x" class="size-4 text-muted-foreground" />
                            </UiButton>
                        </div>
                        <p class="mt-3 text-muted-foreground">Your team has used 80% of your available space. Need more?</p>
                        <UiProgress class="my-4 h-2" :model-value="80" />

                        <div class="flex items-center gap-1">
                            <UiButton class="px-2" variant="ghost" size="sm">Dismiss</UiButton>
                            <UiButton class="px-2 text-sky-500 hover:text-sky-600" variant="ghost" size="sm">Upgrade plan</UiButton>
                        </div>
                    </div> -->
                    <UiDivider class="my-6" />
                    <div class="mt-auto flex items-center gap-3 pb-8">
                        <div class="flex items-center gap-3">
                            <UiAvatar :src="user.avatar" class="size-10" />
                            <div>
                                <p class="text-sm font-semibold" v-html="user.username" />
                                <p class="text-sm text-muted-foreground" v-html="user.email" />
                            </div>
                        </div>
                        <UiTooltip>
                            <UiTooltipTrigger as-child>
                                <UiButton class="ml-auto shrink-0" size="icon-sm" variant="ghost" @click="onLogout">
                                    <Icon name="lucide:log-out" class="size-4 text-muted-foreground" />
                                </UiButton>
                            </UiTooltipTrigger>
                            <UiTooltipContent side="right" align="center">Logout</UiTooltipContent>
                        </UiTooltip>
                    </div>
                </div>
            </div>
        </UiScrollArea>
    </aside>
</template>

<script lang="ts" setup>
    const search = ref<string>("")
    const authStore = useAuthStore()

    const user = {
        avatar: "https://randomuser.me/api/portraits/med/men/2.jpg",
        username: "Jane Doe",
        email: "muzcad@he.tg"
    }

    const topNav = [
        { title: "Dashboard", icon: "lucide:home", link: "/" },
        {
            title: "Comprobantes",
            icon: "lucide:bar-chart-3",
            items: [
                { title: "Facturas", link: "/invoices" },
                { title: "Boletas", link: "/receipts" }
                // { title: "Analytics", link: "#" },
                // { title: "Reports", link: "#" }
            ]
        },
        { title: "Auditoria", icon: "lucide:activity", link: "/audit" },
        { title: "Usuarios", icon: "lucide:users", link: "#" },
        { title: "Tablas", icon: "lucide:folder-dot", link: "/tablas" }
    ]
    const bottomNav = [
        { title: "Soporte", icon: "lucide:life-buoy", link: "#" },
        {
            title: "Configuración",
            icon: "lucide:settings-2",
            items: [
                { title: "Credenciales", link: "/credentials" },
                { title: "Perfil", link: "#" },
                { title: "Cuenta", link: "#" },
                { title: "Seguridad", link: "#" },
                { title: "Billing", link: "#" }
            ]
        }
    ]

    const onLogout = () => authStore.logout()
</script>
