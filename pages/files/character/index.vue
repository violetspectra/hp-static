<script setup lang="ts">
const { data } = await useAsyncData(() =>
  queryContent("/files/character").find()
);
</script>
<template>
  <div class="text-center text-white py-5 container">
    <div class="mb-4">
      <h1>Character files</h1>
      <p>
        These are the character files, and are themed around a specific
        character.<br />
        <NuxtLink to="/" class="text-white">Home</NuxtLink>
      </p>
    </div>

    <div class="row">
      <div v-for="character in data" class="col-md-6 col-lg-4 col-xl-3 mb-4">
        <NavigationCard
          :location="character._path"
          :title="character.title"
          :image-url="character.icon"
        ></NavigationCard>
      </div>
    </div>
  </div>
</template>
