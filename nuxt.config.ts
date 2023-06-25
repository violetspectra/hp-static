// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
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
  hooks: {
    "nitro:config"(config) {
      config.prerender!.routes = config.prerender!.routes!.filter(
        (r) => r !== "/200.html"
      );
    },
  },
});
