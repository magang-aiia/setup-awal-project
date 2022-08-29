<script>
    import MainLayout from "@/Layouts/Main.vue"
    import { Head as HeadInertia } from "@inertiajs/inertia-vue3"
    import getNav from "@/Pages/User/NavUser.js"

    export default {
        components: {
            MainLayout,
            HeadInertia,
        },
        data() {
            return {
                nav: getNav("dashboard"),
            }
        },
    }
</script>

<template>
    <HeadInertia title="Dashboard" />

    <MainLayout :nav="nav">
        <div>Dashboard</div>
    </MainLayout>
</template>
