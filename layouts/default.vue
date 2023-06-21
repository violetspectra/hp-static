<template>
  <div class="min-vh-100 bg-gradient-purple-pink">
    <slot />
  </div>
</template>

<style scoped>
.bg-gradient-purple-pink {
  background: rgb(65, 0, 124);
  background: linear-gradient(
    25deg,
    rgba(65, 0, 124, 1) 0%,
    rgba(160, 69, 175, 1) 100%
  );
}
</style>
