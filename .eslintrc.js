module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "standard", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        "vue/multi-word-component-names": 0,
    },
}
