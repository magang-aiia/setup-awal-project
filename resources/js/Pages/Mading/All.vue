<script>
    import { Head as InertiaHead } from "@inertiajs/inertia-vue3"
    import MainLayout from "@/Layouts/Main"

    export default {
        props: {
            madings: {
                type: Array,
                default: null,
            },
        },
        components: {
            InertiaHead,
            MainLayout,
        },
    }
</script>

<template>
    <InertiaHead title="Mading"></InertiaHead>
    <MainLayout>
        <div class="text-3xl text-center mb-3 font-bold">All Mading</div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                    <tr>
                        <th></th>
                        <th>Judul</th>
                        <th>Caption</th>
                        <th>Foto</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="mading in madings" :key="mading.id" class="hover">
                        <th>{{ mading.id }}</th>
                        <th>{{ mading.judul }}</th>
                        <th>{{ mading.caption.substr(0, 100) + "..." }}</th>
                        <th>{{ mading.foto }}</th>
                        <th>
                            <div class="btn btn-success btn-sm mr-2 py-2">Edit</div>
                            <div class="btn btn-error btn-sm py-2">Hapus</div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </MainLayout>
</template>
