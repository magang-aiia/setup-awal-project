<script setup>
defineProps({
    type: {
        type: String,
        default: "submit",
    },
    bg: {
        bg: String,
        default: "none",
    },
})
</script>

<template>
    <button
        :type="type"
        v-if="bg == 'none'"
        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
    >
        <slot />
    </button>
    <button
        :type="type"
        v-if="bg == 'success'"
        class="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"
    >
        <slot />
    </button>
    <button
        :type="type"
        v-if="bg == 'danger'"
        class="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"
    >
        <slot />
    </button>
    <button
        :type="type"
        v-if="bg == 'warning'"
        class="inline-flex items-center px-4 py-2 bg-yellow-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
