<script setup>
const route = useRoute();
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Hypnoponies` : "Hypnoponies";
  },
});

const metaDescription =
  "Ever felt like being the pony? We're here to help you achieve that goal. Learn how hypnosis works and experience the world on four hooves.";

useSeoMeta({
  ogTitle: "Hypnoponies",
  twitterTitle: "Hypnoponies",
  ogImage: "https://hypnoponies.net/img/meta-icon.jpg",
  twitterImage: "https://hypnoponies.net/img/meta-icon.jpg",
  description: metaDescription,
  ogDescription: metaDescription,
  twitterDescription: metaDescription,
  twitterCard: "summary_large_image",
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
