<script setup>
import BreezeButton from "@/Components/Button.vue"
import BreezeGuestLayout from "@/Layouts/Guest.vue"
import BreezeInput from "@/Components/Input.vue"
import BreezeLabel from "@/Components/Label.vue"
import BreezeValidationErrors from "@/Components/ValidationErrors.vue"
import { Head, useForm } from "@inertiajs/inertia-vue3"

defineProps({
    status: String,
})

const route = window.route

const form = useForm({
    email: "",
    password: "",
    remember: false,
})

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    })
}
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Log in" />

        <BreezeValidationErrors class="mb-4" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <BreezeLabel for="email" value="Email" />
                <BreezeInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password" value="Password" />
                <BreezeInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />
            </div>

            <div class="flex items-center justify-end mt-4">
                <BreezeButton :bg="'success'"> Log in </BreezeButton>
            </div>
        </form>
    </BreezeGuestLayout>
</template>
