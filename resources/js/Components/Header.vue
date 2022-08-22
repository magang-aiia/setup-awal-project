<script>
import { computed } from "vue"
import { useStore } from "vuex"
import { Link as InertiaLink } from "@inertiajs/inertia-vue3"

export default {
    setup() {
        const store = useStore()
        store.dispatch("setupDark")
        return {
            shownSidebar: computed(() => store.state.shownSidebar),
            isDark: computed(() => store.state.isDark),
            toggleSidebar: () => store.dispatch("toggleSidebar"),
            toggleDark: () => store.dispatch("toggleDark"),
        }
    },
    components: {
        InertiaLink,
    },
}
</script>
<template>
    <!-- nav  -->
    <nav class="bg-white border-b border-gray-200 fixed z-30 w-full dark:bg-gray-800">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button
                        aria-expanded="true"
                        aria-controls="sidebar"
                        class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        @click="toggleSidebar"
                    >
                        <svg
                            class="w-6 h-6"
                            :class="{ hidden: !shownSidebar }"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            id="toggleSidebarMobileClose"
                            class="w-6 h-6"
                            :class="{ hidden: shownSidebar }"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <InertiaLink :href="route('root')" class="text-xl font-bold flex items-center lg:ml-2.5">
                        <span class="self-center whitespace-nowrap text-gray-800 dark:text-gray-100">Cuzia</span>
                    </InertiaLink>
                </div>
                <div class="ml-3 flex items-center">
                    <button
                        type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-2.5 mr-2"
                        @click="toggleDark"
                    >
                        <svg
                            id="theme-toggle-dark-icon"
                            class="w-5 h-5"
                            :class="{ hidden: isDark }"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg
                            id="theme-toggle-light-icon"
                            class="w-5 h-5"
                            :class="{ hidden: !isDark }"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div
                        type="button"
                        data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-end"
                        class="cursor-pointer inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 hover:bg-gray-300 rounded-full dark:bg-gray-600 dark:hover-bg-gray-800"
                    >
                        <span class="font-medium text-bold text-gray-600 dark:text-gray-300">AD</span>
                    </div>
                    <div
                        id="userDropdown"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                            <div>Kholan M</div>
                        </div>
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <InertiaLink
                                    :href="route('dashboard')"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </InertiaLink>
                            </li>
                            <li>
                                <InertiaLink
                                    :href="route('mading.index')"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Mading
                                </InertiaLink>
                            </li>
                        </ul>
                        <div class="py-1">
                            <InertiaLink
                                :href="route('logout')"
                                class="block py-2 px-4 text-sm text-gray-700 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                method="post"
                                as="button"
                            >
                                Sign out
                            </InertiaLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
