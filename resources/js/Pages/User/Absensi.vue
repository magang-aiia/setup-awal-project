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
                nav: getNav("absensi"),
            }
        },
    }
</script>

<template>
    <HeadInertia title="Absensi" />

    <MainLayout :nav="nav">
        <div>Absensi</div>
    </MainLayout>
</template>
