<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { path, params } = useRoute();

interface HypnoFile extends ParsedContent {
  versions: {
    name: string;
    downloads: {
      name: string;
      source: string;
    }[];
  }[];
}

const data = await queryContent<HypnoFile>(path)
  .where({ _partial: false })
  .findOne();

useSeoMeta({
  title: data?.title,
  ogTitle: `${data?.title} - Hypnoponies`,
  twitterTitle: `${data?.title} - Hypnoponies`,
});

/**
 * Triggers the inline player
 */
const audioPlayer = ref();
const playAudioInline = (
  characterName: string,
  version: string,
  edition: string,
  sourceURL: string
) => {
  audioPlayer.value.playAudio(characterName, version, edition, sourceURL);
};
</script>
<template>
  <div class="text-white py-5 container">
    <div class="mb-4 text-center">
      <h1>{{ data?.title }}</h1>
      <p>
        <NuxtLink to="/" class="text-white">Home</NuxtLink> &lt;
        <NuxtLink :to="`/files/${params.category}`" class="text-white">{{
          titleCase(params.category as string)
        }}</NuxtLink>
      </p>
    </div>
    <div class="row justify-content-center g-3">
      <div class="col-lg-7 col-xl-8">
        <div
          class="rounded px-3 py-4 prose-container transparent-white-background"
        >
          <div v-if="params.category === 'character'">
            <p class="h4">General Information</p>
            <p>
              Before even starting pony hypnosis, please read over everything in
              this thread here. After doing that, really think over it all and
              be 100% sure you know what you're getting into. Hypnosis is not a
              toy nor a game. We want ponies to enjoy these files, but we also
              want them to be aware. All these warnings and disclaimers may be
              scary, but they're here for a few reasons. They're here to make
              you aware of what you're getting into. Also to make sure you go
              about pony hypnosis in the safest way possible. I want to give a
              quick thank you to Star Shard for coming up with the idea for this
              new style. I also want to give a quick thank you to Bright Star
              for coming up with the format of the download section of this
              thread.
            </p>
            <p class="h4">Emotional Kernel Panic Warning</p>
            <p>
              EKP, which is short for Emotional Kernel Panic, is something very
              serious and not to be taken lightly. It's when the effects of one
              hypnosis file attempt to overwrite another hypnosis file, causing
              an identity crisis or crisis of desire. It can be anywhere from
              annoying, to painfully mind wrenching. It's avoided by not
              switching between files. You are however free to use two different
              files of the same pony. So for example you could use version 2.0
              and version 3.0 of this file without any trouble. So in short, do
              NOT use two different pony hypnosis files unless they are the same
              pony, but different versions. If you really must switch files for
              whatever reason, you can, but only if you use the "Pony TF RESET"
              file. It can be found under the support files here. Just be sure
              to use it multiple times before starting up a new file. Also be
              aware that there have been reports of ponies getting EKP even
              after resetting. So it's better to really think through your
              choice of which pony you want to use and stick with them.
            </p>
          </div>
          <ContentRenderer :value="data?.body">
            <ContentRendererMarkdown :value="data?.body" />
          </ContentRenderer>
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
            <div
              v-for="download in version.downloads"
              class="row py-1 rounded hypno-file-link"
            >
              <div class="col-auto">
                <span
                  @click="
                    playAudioInline(
                      data?.title as string,
                      version.name,
                      download.name,
                      download.source
                    )
                  "
                  style="cursor: pointer"
                  ><i class="bi bi-play-fill"></i> {{ download.name }}</span
                >
              </div>
              <a
                class="col-auto text-white text-decoration-none ms-auto"
                :href="download.source"
                v-if="download.source"
                download
                target="_blank"
                ><i class="bi bi-download"></i
              ></a>
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
          <WebPlayer class="shadow" ref="audioPlayer"></WebPlayer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hypno-file-link {
  transition-duration: 200ms;

  &:hover {
    background-color: #00000055;
  }
}
</style>
