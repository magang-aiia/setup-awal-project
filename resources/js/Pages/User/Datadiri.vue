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
                nav: getNav("pengajuan", "datadiri"),
            }
        },
    }
</script>

<template>
    <HeadInertia title="Data Diri" />

    <MainLayout :nav="nav">
        <div>Data Diri</div>
    </MainLayout>
</template>
