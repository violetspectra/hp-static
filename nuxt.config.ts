// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-simple-sitemap"],
  // devtools: { enabled: true },
  css: [
    "~/assets/style/theme.scss",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
  ],
  content: {
    documentDriven: {
      injectPage: false,
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://hypnoponies.net",
    },
  },
});
