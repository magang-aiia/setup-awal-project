<script setup>
    import BreezeValidationErrors from "@/Components/ValidationErrors.vue"
    import { Head, useForm } from "@inertiajs/inertia-vue3"

    defineProps({
        canResetPassword: Boolean,
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
    <Head title="Login S1AR" />
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
            <div class="text-center lg:w-[50vw] lg:text-right mx-5">
                <h1 class="text-5xl font-bold">Login S1AR!</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                    In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form @submit.prevent="submit" class="card-body">
                    <BreezeValidationErrors class="mb-2" />

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            v-model="form.email"
                            class="input input-bordered"
                            required
                            autofocus
                            autocomplete="username"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            v-model="form.password"
                            class="input input-bordered"
                            required
                            autocomplete="current-password"
                        />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
