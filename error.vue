<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="container py-5 text-center text-white">
      <h1>{{ error.statusCode }}</h1>
      <p v-if="error.statusCode === 404">Page not found</p>
      <p v-else>An error occurred...</p>
      <a @click="handleError" class="text-white" style="cursor: pointer"
        >&lt; Go back home</a
      >
    </div>
  </NuxtLayout>
</template>
