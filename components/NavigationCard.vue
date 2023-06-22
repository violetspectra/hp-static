<script setup>
const props = defineProps({
  title: String,
  location: String,
  imageUrl: String,
  disabled: Boolean,
});
</script>
<template>
  <div class="ratio ratio-1x1">
    <NuxtLink :to="disabled ? '' : location" class="text-decoration-none">
      <div
        class="card h-100 card-hover flex p-3"
        :class="{ disabled: disabled }"
      >
        <img
          :src="imageUrl"
          class="mb-2"
          style="max-width: 100%; height: 80%; object-fit: contain"
        />
        <p class="h4">{{ title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.card-hover {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition-duration: 300ms;

  &:hover:not(.disabled) {
    transform: scale(1.025);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }

  &.disabled {
    opacity: 0.2;
  }
}
</style>
