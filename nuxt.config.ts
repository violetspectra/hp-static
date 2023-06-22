// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  css: ["~/assets/style/theme.scss"],
  content: {
    documentDriven: true,
  },
});
