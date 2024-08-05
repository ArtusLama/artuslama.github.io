// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/fonts", "radix-vue/nuxt"],
  


  tailwindcss: { viewer: false },
  devtools: { enabled: false },
})