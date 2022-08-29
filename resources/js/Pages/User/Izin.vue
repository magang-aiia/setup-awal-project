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
                nav: getNav("pengajuan", "izin"),
            }
        },
    }
</script>

<template>
    <HeadInertia title="Izin" />

    <MainLayout :nav="nav">
        <div>Izin</div>
    </MainLayout>
</template>
