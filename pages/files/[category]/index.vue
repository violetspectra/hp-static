<script setup lang="ts">
const route = useRoute();

const data = await queryContent(`/files/${route.params.category}`)
  .only(["title", "icon", "_path"])
  .where({ _partial: false })
  .find();

// if (!data.value || data.value.length <= 0) {
//   throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
// }

const categoryMeta = await queryContent(`/files/${route.params.category}`)
  .where({ _partial: true })
  .findOne();

useSeoMeta({
  title: categoryMeta?.title,
  ogTitle: `${categoryMeta?.title} - Hypnoponies`,
  twitterTitle: `${categoryMeta?.title} - Hypnoponies`,
  description: categoryMeta?.description,
  ogDescription: categoryMeta?.description,
  twitterDescription: categoryMeta?.description,
});
</script>
<template>
  <div class="text-center text-white py-5 container">
    <div class="mb-4">
      <h1>{{ categoryMeta?.title }}</h1>
      <p class="mb-0">{{ categoryMeta?.description }}</p>
      <NuxtLink to="/" class="text-white">Home</NuxtLink>
    </div>

    <div class="row">
      <div v-for="files in data" class="col-md-6 col-lg-4 col-xl-3 mb-4">
        <NavigationCard
          :location="files._path"
          :title="files.title"
          :image-url="files.icon"
        ></NavigationCard>
      </div>
    </div>
  </div>
</template>
