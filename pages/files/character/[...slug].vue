<script setup lang="ts"></script>
<template>
  <div class="text-center text-white py-5 container">
    <div class="mb-4">
      <h1>Character files</h1>
      <p>
        These are the character files, and are themed around a specific
        character.<br />
        <NuxtLink to="/" class="text-white">&lt; Home</NuxtLink>
      </p>
    </div>
    <div class="d-flex justify-content-center prose-container">
      <div
        class="text-start rounded px-3 py-4"
        style="max-width: 50rem; background-color: #ffffff38"
      >
        <ContentDoc />
      </div>
    </div>
  </div>
</template>
