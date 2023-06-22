<script setup lang="ts">
const barPositionPercent = ref(50);
const progressHoverArea = ref<HTMLElement>();

const setBarPositionPercent = (percent: number) => {
  barPositionPercent.value = Math.min(Math.max(0, percent), 100);
};

const progressHover = (e: MouseEvent) => {
  const cursorPosition = e.offsetX;
  const timelineWidth = progressHoverArea.value!.offsetWidth;
  const hoverPercent = (cursorPosition / timelineWidth) * 100;
  setBarPositionPercent(hoverPercent);
};
</script>
<template>
  <div class="player-bg px-4 py-3 rounded">
    <div class="row text-white">
      <div class="col-auto" style="font-size: 3rem; line-height: 1">
        <i class="bi bi-play-fill"></i>
        <!-- <i class="bi bi-pause-fill"></i> -->
      </div>
      <div class="col">
        <div class="row" style="line-height: 1.25">
          <div class="col-auto">
            <p class="mb-0 fw-bold">Character</p>
            <p class="mb-1">Version - Type</p>
          </div>
          <div class="col-auto ms-auto d-flex align-items-end">
            <p class="mb-1">1:14 / 22:14</p>
          </div>
        </div>
        <div class="py-1" @mousemove="progressHover" ref="progressHoverArea">
          <div
            class="rounded-pill"
            style="height: 0.4rem; background-color: #e9ecef9e"
          >
            <div
              style="
                background: #4c00daee;
                height: 100%;
                transition-duration: 50ms;
              "
              :style="{ width: barPositionPercent + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-bg {
  background: #c47effa1;
  background: linear-gradient(27deg, #c47effa1, #db809dbd);
  backdrop-filter: blur(3px);
}
</style>
