import { Vue3Lottie } from 'vue3-lottie'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LottieAnimation', Vue3Lottie)
})