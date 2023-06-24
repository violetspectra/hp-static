<script setup>
useHead({});
</script>
<template>
  <div class="text-center text-white py-5 container">
    <div class="mb-4">
      <img
        src="/img/hypnoponies-logo.png"
        class="mb-2"
        style="height: 50px; filter: drop-shadow(2px 2px 2px #00000050)"
      />
      <h1 class="visually-hidden">Hypnoponies</h1>
      <p>
        Welcome to Hypnoponies. You will find links to the files below.<br />
        <a href="https://discord.gg/WBVkUTN" class="text-white"
          >Join the Discord</a
        >
      </p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-3 mb-4">
        <NavigationCard
          title="Character"
          location="/files/character"
          imageUrl="/files/character/character-icon.png"
        />
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <NavigationCard
          title="Experience"
          location="/files/experience"
          :disabled="true"
        />
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <NavigationCard
          title="Support"
          location="/files/support"
          :disabled="true"
        />
      </div>
    </div>
  </div>
  <div class="w-100 py-5 px-3 bg-gradient-darkpurple-lessdarkpurple">
    <div class="d-flex justify-content-center">
      <div
        class="text-white rounded-3 px-3 py-3"
        style="background-color: #ffffff38; max-width: 40rem"
      >
        <figure class="mb-0 text-start">
          <blockquote class="blockquote fs-6 mb-4">
            <p>
              "Like the ever-flowing magic of friendship, our journey through
              life is filled with moments of change and growth. Just as the sun
              rises each day, casting away the darkness, we too must embrace the
              dawn of progression. As we bid farewell to the past, let us
              cherish its lessons, for they shape the path to a brighter future.
              With each step forward, we become stronger, wiser, and kinder,
              evolving into the ponies we are destined to be. So spread your
              wings and let the winds of change carry you to new heights, for
              the magic of friendship will guide you, always."
            </p>
          </blockquote>
          <figcaption class="blockquote-footer text-white mb-0">
            With love, <cite title="Source Title">Rainbow Dash ♥</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-darkpurple-lessdarkpurple {
  background: rgb(19, 11, 26);
  background: linear-gradient(
    27deg,
    rgba(19, 11, 26, 1) 0%,
    rgba(64, 41, 84, 1) 100%
  );
}
</style>
