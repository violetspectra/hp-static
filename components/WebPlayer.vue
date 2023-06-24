<script setup lang="ts">
const barPositionPercent = ref(0);
const progressHoverArea = ref<HTMLElement>();

const setBarPositionPercent = (percent: number) => {
  barPositionPercent.value = Math.min(Math.max(0, percent), 100);
};

const hoveringProgress = ref(false);
const progressHover = (e: MouseEvent) => {
  const cursorPosition = e.offsetX;
  const timelineWidth = progressHoverArea.value!.offsetWidth;
  const hoverPercent = (cursorPosition / timelineWidth) * 100;
  setBarPositionPercent(hoverPercent);
};

const updatePlaybackProgress = () => {
  if (hoveringProgress.value) return;
  barPositionPercent.value =
    ((audioFile.value?.currentTime as number) /
      (audioFile.value?.duration as number) || 0) * 100;
};

const skipToTime = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!audioFile.value || !target) return;

  const clickedX = e.clientX - target.getBoundingClientRect().left;
  const percentage = clickedX / target.clientWidth;
  audioFile.value.currentTime = percentage * audioFile.value.duration;
};

const audioMetadata = reactive({
  title: "",
  subtitle: "",
  duration: 0,
  currentTime: 0,
});

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

const formattedPlaybackTime = computed(() => {
  return formatTime(audioMetadata.currentTime);
});

const formattedDuration = computed(() => {
  return formatTime(audioMetadata.duration);
});

const audioFile = ref<HTMLAudioElement>();
const playAudio = (
  characterName: string,
  version: string,
  edition: string,
  sourceURL: string
) => {
  audioMetadata.title = characterName;
  audioMetadata.subtitle = version + " | " + edition;
  audioFile.value = new Audio(sourceURL);
  audioFile.value.volume = 1;
  audioFile.value.play();
  audioMetadata.currentTime = 0;
  audioMetadata.duration = 0;
  audioFile.value.addEventListener("loadedmetadata", () => {
    audioMetadata.duration = audioFile.value?.duration as number;
  });
  audioFile.value.addEventListener("timeupdate", () => {
    updatePlaybackProgress();
    audioMetadata.currentTime = audioFile.value?.currentTime as number;
  });
};
defineExpose({ playAudio });
</script>
<template>
  <div class="player-bg px-4 py-3 rounded">
    <div class="row text-white">
      <div class="col-auto" style="font-size: 3rem; line-height: 1">
        <i
          class="bi bi-play-fill cursor-pointer"
          v-if="audioFile?.paused"
          @click="audioFile?.play()"
        ></i>
        <i
          class="bi bi-pause-fill cursor-pointer"
          v-else
          @click="audioFile?.pause()"
        ></i>
      </div>
      <div class="col">
        <div class="row" style="line-height: 1.25">
          <div class="col-auto" style="min-height: 2.7796rem">
            <p class="mb-0 fw-bold">{{ audioMetadata.title }}</p>
            <p class="mb-1">{{ audioMetadata.subtitle }}</p>
          </div>
          <div class="col-auto ms-auto d-flex align-items-end">
            <p class="mb-1">
              {{ formattedPlaybackTime }} / {{ formattedDuration }}
            </p>
          </div>
        </div>
        <div
          class="py-1 cursor-pointer"
          @mousemove="progressHover"
          @mouseleave="
            hoveringProgress = false;
            updatePlaybackProgress();
          "
          @mouseenter="hoveringProgress = true"
          @click="skipToTime"
          ref="progressHoverArea"
        >
          <div
            class="rounded-pill"
            style="height: 0.4rem; background-color: #e9ecef9e"
          >
            <div
              class="rounded-pill"
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
