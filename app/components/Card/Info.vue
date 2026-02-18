<script setup lang="ts">
defineProps(['no_hover'])
</script>

<template>

  <div
      :class="[$slots.bottom ? 'h-[360px]' :'h-auto md:h-[320px]',no_hover ? '' : 'hover:bg-[#F1F3FA] hover:border-[#F1F3FA]']"
      class="group flex flex-col
         px-5 py-7
         border border-[#E0E0E0]
         transition-colors
         bg-white
         "
  >
    <div v-if="$slots.top"
         :class="$slots.bottom ? 'mb-10' :'mb-7'"
         >
      <slot name="top"></slot>
    </div>

    <p v-if="$slots.title" class="text-2xl mb-8 leading-[120%]">
      <slot name="title"></slot>
    </p>

    <p
        v-if="$slots.text"
        :class="$slots.bottom ? 'mb-8' :'mt-auto'"
        class="text-[#9F9F9F]
           group-hover:text-[#7680A1] transition-colors"
    >
      <slot name="text"></slot>
    </p>

    <!-- НИЗ -->
    <div v-if="$slots.bottom" class="mt-auto">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>