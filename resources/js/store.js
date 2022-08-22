import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            shownSidebar: true,
            isDark: false,
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.shownSidebar = !state.shownSidebar
        },
        setDark(state, value) {
            state.isDark = value
        },
        toggleDark(state) {
            // if set via local storage previously
            if (localStorage.getItem("color-theme")) {
                if (localStorage.getItem("color-theme") === "light") {
                    document.documentElement.classList.add("dark")
                    state.isDark = true
                    localStorage.setItem("color-theme", "dark")
                } else {
                    document.documentElement.classList.remove("dark")
                    state.isDark = false
                    localStorage.setItem("color-theme", "light")
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark")
                    state.isDark = true
                    localStorage.setItem("color-theme", "light")
                } else {
                    document.documentElement.classList.add("dark")
                    state.isDark = false
                    localStorage.setItem("color-theme", "dark")
                }
            }
        },
    },
    actions: {
        toggleSidebar: ({ commit }) => commit("toggleSidebar"),
        toggleDark: ({ commit }) => commit("toggleDark"),
        setupDark: ({ commit }) => {
            if (
                localStorage.getItem("color-theme") === "dark" ||
                (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add("dark")
                commit("toggleDark", true)
            } else {
                document.documentElement.classList.remove("dark")
                commit("toggleDark", false)
            }
        },
    },
})

export default store
