<script setup lang="ts">
import {types} from "sass";
import Null = types.Null;

const props = defineProps({
  bg_image: {
    type: String,
    default: '/video.jpg',
  },
  bg_video: {
    type: String || null,
    default: null,
  },
  bg_color: {
    type: String,
    default: 'rgba(67,67,67,0.5)',
  },
  h: {
    type: String,
    default: '864px',
  }
})
</script>

<template>
  <section
      :style="[
      !props.bg_video ? `background-image: url(${props.bg_image})` : '',
      `background-color: ${props.bg_color}`,
      `height: ${props.h}`
    ]"
      class="relative z-10 bg-cover mb-[88px] md:mb-[120px]"
  >
    <!-- Фоновое видео -->
    <video
        v-if="props.bg_video"
        :src="props.bg_video"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <!-- Цветовой оверлей -->
    <div
        :style="`background-color: ${props.bg_color}`"
        class="absolute inset-0 -z-10"
    />

    <div class="container h-full relative z-10">
      <slot></slot>
    </div>
  </section>
</template>