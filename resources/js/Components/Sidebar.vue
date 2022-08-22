<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
    setup() {
        const store = useStore()
        return {
            shownSidebar: computed(() => store.state.shownSidebar),
            toggleSidebar: () => store.dispatch("toggleSidebar"),
        }
    },
}
</script>

<template>
    <!-- sidebar  -->
    <aside
        id="sidebar"
        class="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        :class="{ hidden: shownSidebar }"
        aria-label="Sidebar"
    >
        <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 bg-white divide-y space-y-1">
                    <div class="space-y-2 pb-2">
                        <div>
                            <div
                                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                            >
                                <svg
                                    class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                <span class="ml-3">Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-2 pt-2">
                        <div
                            class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="gem"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                                ></path>
                            </svg>
                            <span class="ml-4">Upgrade to Pro</span>
                        </div>
                        <div
                            target="_blank"
                            class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                        >
                            <svg
                                class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="ml-3">Documentation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    <div
        class="bg-gray-900 bg-opacity-50 lg:hidden fixed inset-0 z-10"
        :class="{ hidden: shownSidebar }"
        @click="toggleSidebar"
    ></div>
</template>
