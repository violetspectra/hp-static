<script setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Hypnoponies` : "Hypnoponies";
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
