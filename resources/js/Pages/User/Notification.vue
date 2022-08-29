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
                nav: getNav(),
            }
        },
    }
</script>

<template>
    <HeadInertia title="Notification" />

    <MainLayout :nav="nav">
        <div>Notification</div>
    </MainLayout>
</template>
