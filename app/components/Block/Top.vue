<script setup lang="ts">
const props = defineProps({
  bg_image: {
    type: String ,
    default: '/video.jpg',
  },
  bg_color: {
    type: String ,
    default: '#29070780',
  },
  h: {
    type: String ,
    default: '864px',
  }
})
</script>

<template>
  <section  :style="[`background-image: url(${props.bg_image})`,
 `background-color:${props.bg_color}`,`height: ${props.h}`]"
            class="relative z-10 bg-cover mb-[120px]" >
    <div class="container h-full">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>

</style>