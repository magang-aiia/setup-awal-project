<script>
import { useStore } from "vuex"
import HeaderDashboard from "@/Components/Header.vue"
import FooterDashboard from "@/Components/Footer.vue"
import SidebarDashboard from "@/Components/Sidebar.vue"

export default {
    setup() {
        const store = useStore()
        store.dispatch("setupDark")
    },
    components: {
        HeaderDashboard,
        FooterDashboard,
        SidebarDashboard,
    },
}
</script>

<template>
    <HeaderDashboard />

    <div class="flex overflow-hidden bg-white pt-16">
        <SidebarDashboard />

        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
                <header class="bg-white shadow" v-if="$slots.header">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header" />
                    </div>
                </header>
                <slot />
            </main>

            <FooterDashboard />
        </div>
    </div>
</template>
