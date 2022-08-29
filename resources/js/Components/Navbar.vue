<script setup>
    import { Link } from "@inertiajs/inertia-vue3"
    defineProps({
        nav: {
            type: Array,
            default: null,
        },
        sidebar: {
            type: Boolean,
            default: false,
        },
    })
</script>

<template>
    <div class="navbar bg-base-100 rounded-xl mb-3 shadow-lg" v-if="!sidebar">
        <div class="navbar-start">
            <label for="sidedrawer" class="btn btn-square btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </label>
            <Link
                :href="route('root')"
                class="btn btn-ghost normal-case text-xl hidden lg:inline-flex"
                v-if="$slots.brand"
            >
                <slot name="brand" />
            </Link>
        </div>
        <div class="navbar-center flex">
            <Link :href="route('root')" class="btn btn-ghost normal-case text-xl lg:hidden" v-if="$slots.brand">
                <slot name="brand" />
            </Link>
            <ul class="menu menu-horizontal p-0 hidden lg:inline-flex" v-if="nav != null">
                <template v-for="navitem in nav" :key="navitem.name">
                    <li v-if="navitem.child.length > 0" tabindex="0">
                        <a :class="{ 'bg-primary hover:bg-primary/75': navitem.active }">
                            <box-icon
                                :type="navitem.iconType"
                                :name="navitem.icon"
                                class="fill-slate-700 dark:fill-slate-400"
                            ></box-icon>
                            {{ navitem.name }}
                            <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul class="p-2 bg-base-100 shadow">
                            <li v-for="navchild in navitem.child" :key="navchild.name">
                                <Link
                                    :href="navchild.to != null ? route(navchild.to) : '#'"
                                    :class="{ 'bg-primary hover:bg-primary/75': navchild.active }"
                                    >{{ navchild.name }}</Link
                                >
                            </li>
                        </ul>
                    </li>
                    <li v-else>
                        <Link
                            :href="navitem.to != null ? route(navitem.to) : '#'"
                            :class="{ 'bg-primary hover:bg-primary/75': navitem.active }"
                        >
                            <box-icon
                                :type="navitem.iconType"
                                :name="navitem.icon"
                                class="fill-slate-700 dark:fill-slate-400"
                            ></box-icon>
                            {{ navitem.name }}
                        </Link>
                    </li>
                </template>
            </ul>
        </div>
        <div class="navbar-end">
            <Link
                :href="route('notification')"
                class="btn btn-ghost btn-circle mr-3"
                :class="{ 'bg-primary': route().current('notification') }"
            >
                <div class="indicator">
                    <box-icon type="regular" name="bell" class="fill-slate-700 dark:fill-slate-400"></box-icon>
                    <span
                        class="badge badge-xs text-base-100 indicator-item"
                        :class="{
                            'badge-secondary': route().current('notification'),
                            'badge-primary': !route().current('notification'),
                        }"
                        >10</span
                    >
                </div>
            </Link>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle mr-2 avatar">
                    <div class="w-10 rounded-full">
                        <img src="/img/avatar.jpg" />
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li class="py-3 px-4 text-xs text-base-content">
                        {{ $page.props.auth.user.name }}
                    </li>
                    <li>
                        <a class="justify-between">
                            Change Password
                            <span class="badge bg-warning border-warning"
                                ><box-icon name="error" class="fill-red-500"></box-icon
                            ></span>
                        </a>
                    </li>
                    <li><Link :href="route('logout')" method="post" as="button">Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100" v-else>
        <template v-for="navitem in nav" :key="navitem.name">
            <li v-if="navitem.child.length > 0">
                <a
                    href="#"
                    @click="navitem.active = !navitem.active"
                    :class="{ 'bg-primary hover:bg-primary/75': navitem.active }"
                >
                    <span class="w-full flex items-center">
                        <box-icon
                            :type="navitem.iconType"
                            :name="navitem.icon"
                            class="mr-3 fill-slate-700 dark:fill-slate-400"
                        ></box-icon>
                        {{ navitem.name }}
                        <span
                            class="transition-transform duration-300 ease-in-out ml-auto"
                            :class="{ 'rotate-90': navitem.active, 'rotate-0': !navitem.active }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </span>
                </a>
                <div class="bg-transparent cursor-default" v-show="navitem.active">
                    <ul class="w-full">
                        <li v-for="navchild in navitem.child" :key="navchild.name">
                            <Link
                                :href="navchild.to != null ? route(navchild.to) : '#'"
                                :class="{ 'bg-primary hover:bg-primary/75': navchild.active }"
                            >
                                {{ navchild.name }}
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li v-else>
                <Link
                    :href="navitem.to != null ? route(navitem.to) : '#'"
                    :class="{ 'bg-primary hover:bg-primary/75': navitem.active }"
                >
                    <box-icon
                        :type="navitem.iconType"
                        :name="navitem.icon"
                        class="fill-slate-700 dark:fill-slate-400"
                    ></box-icon>
                    {{ navitem.name }}
                </Link>
            </li>
        </template>
    </ul>
</template>
