// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  
  i18n: {
    
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",

              name: "English(US)",
              moment: "en",
            },
            {
              code: "kh-KH",
              iso: "kh-KH",
              file: "kh-KH.json",

        name: "ខេមរភាសា",
        moment: "kh",
      },
    ],
    defaultLocale: "en-US",
    vueI18n: "en-US"
  },
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "JR's Creative Portfolio Showcase: Unleashing Artistic Talents",
      meta: [
        {
          name: "description",
          content:
            "Explore Heng Chomroeun's portfolio! We offer web design services and valuable resources to boost business success.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
});
