// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/style.css"],
    target: 'static',
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
        transpile: [
            "gsap"
        ]
    },
    modules: [
        '@pinia/nuxt'
    ],
})
