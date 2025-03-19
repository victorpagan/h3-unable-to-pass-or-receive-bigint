// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    SQUARE_SANDBOX_LOCATION_ID: "",
    SQUARE_SANDBOX_ACCESS_TOKEN: "",
    public: {}
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
