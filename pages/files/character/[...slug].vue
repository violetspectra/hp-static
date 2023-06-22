<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { path } = useRoute();

interface HypnoFile extends ParsedContent {
  versions: {
    name: string;
    downloads: {
      name: string;
      source: string;
    }[];
  }[];
}

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent<HypnoFile>().where({ _path: path }).findOne();
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>
<template>
  <div class="text-white py-5 container">
    <div class="mb-4 text-center">
      <h1>Character files</h1>
      <p>
        These are the character files, and are themed around a specific
        character.<br />
        <NuxtLink to="/" class="text-white">Home</NuxtLink> &lt;
        <NuxtLink to="/files/character" class="text-white"
          >Character Files</NuxtLink
        >
      </p>
    </div>
    <div class="row justify-content-center g-3">
      <div class="col-lg-7 col-xl-8">
        <div
          class="rounded px-3 py-4 prose-container transparent-white-background"
        >
          <ContentRenderer :value="data?.body">
            <ContentRendererMarkdown :value="data?.body" />
          </ContentRenderer>

          <!-- <ContentDoc /> -->
        </div>
      </div>
      <div class="col-lg-5 col-xl-4 col-xxl-3">
        <div class="transparent-white-background rounded px-3 py-3">
          <div class="ratio ratio-1x1 mb-3">
            <div
              class="transparent-white-background rounded p-4 d-flex justify-content-center"
            >
              <img
                :src="data?.icon"
                style="max-width: 100%; max-height: 100%; object-fit: contain"
              />
            </div>
          </div>
          <div v-for="version in data?.versions" class="mb-2">
            <p class="mb-0 fw-bold">{{ version.name }}</p>
            <div v-for="download in version.downloads" class="row py-1">
              <div class="col-auto" style="cursor: pointer">
                {{ download.name }}
              </div>
              <a
                class="col-auto text-white text-decoration-none"
                :href="download.source"
                :download="download.source"
                target="_blank"
                >DL</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 mt-4"></div>
  <div class="position-fixed bottom-0 start-0 end-0 mb-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-11">
          <WebPlayer></WebPlayer>
        </div>
      </div>
    </div>
  </div>
</template>
