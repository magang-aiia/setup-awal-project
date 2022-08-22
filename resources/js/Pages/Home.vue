<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3"
defineProps({
    canLogin: Boolean,
    canCreateIzin: Boolean,
})
</script>

<template>
    <Head title="Cuzia Portal" />

    <div class="flex content-center bg-slate-200 flex-wrap dark:bg-slate-800 items-center h-screen">
        <h1 class="display-2 mb-5 dark:text-white w-100 text-center">Cuzia Portal</h1>
        <div class="w-100 text-center">
            <Link
                v-if="$page.props.auth.user && canCreateIzin"
                :href="route('mading.index')"
                class="btn btn-primary rounded-md"
                >Buat Izin</Link
            >
            <Link v-else-if="canLogin" :href="route('login')" class="btn btn-primary mx-3 rounded-md"
                >Login untuk izin</Link
            >
        </div>
    </div>
</template>
