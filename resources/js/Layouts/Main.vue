<script setup>
    import Navbar from "@/Components/Navbar.vue"
    import Footer from "@/Components/Footer.vue"

    defineProps({
        nav: {
            type: Array,
            default: () => [
                {
                    name: "Dashboard",
                    active: false,
                    to: "dashboard",
                    icon: "home",
                    iconType: "regular",
                    child: [],
                },
                {
                    name: "Izin",
                    active: false,
                    to: null,
                    icon: "log-out-circle",
                    iconType: "regular",
                    child: [
                        {
                            name: "Cuti",
                            active: false,
                            to: null,
                        },
                        {
                            name: "Izin IMU/ITU",
                            active: false,
                            to: null,
                        },
                        {
                            name: "Dinas Luar",
                            active: false,
                            to: null,
                        },
                        {
                            name: "Sakit",
                            active: false,
                            to: null,
                        },
                    ],
                },
                {
                    name: "Profile",
                    active: false,
                    to: null,
                    icon: "user-circle",
                    iconType: "regular",
                    child: [],
                },
            ],
        },
    })
</script>

<template>
    <div class="drawer">
        <input id="sidedrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col flex-wrap bg-base-300">
            <div class="p-3 w-full h-screen">
                <!-- navbar  -->
                <Navbar :nav="nav">
                    <template #brand>S1AR</template>
                </Navbar>

                <!-- content  -->
                <div class="p-4 bg-base-100 shadow-lg rounded-xl mb-3 h-[calc(100vh_-_11.2rem)] overflow-y-auto">
                    <slot></slot>
                </div>

                <!-- footer  -->
                <Footer />
            </div>
        </div>

        <div class="drawer-side">
            <label for="sidedrawer" class="drawer-overlay"></label>
            <!-- Sidebar content here -->
            <Navbar :nav="nav" :sidebar="true" />
        </div>
    </div>
</template>
