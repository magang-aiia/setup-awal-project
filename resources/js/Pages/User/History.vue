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
                nav: getNav("history"),
            }
        },
    }
</script>

<template>
    <HeadInertia title="History" />

    <MainLayout :nav="nav">
        <div>History</div>
    </MainLayout>
</template>
