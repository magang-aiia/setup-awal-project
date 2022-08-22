<script>
import { useStore } from "vuex"
import { Link as InertiaLink } from "@inertiajs/inertia-vue3"

export default {
    setup() {
        const store = useStore()
        store.dispatch("setupDark")
    },
    components: {
        InertiaLink,
    },
}
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-200 dark:bg-slate-800">
        <div>
            <InertiaLink
                href="/"
                class="w-100 text-4xl text-gray-900 text-center dark:text-white no-underline hover:text-gray-700 dark:hover:text-gray-200"
            >
                Cuzia Portal
            </InertiaLink>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
