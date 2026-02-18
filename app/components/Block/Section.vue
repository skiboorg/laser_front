<script setup lang="ts">
defineProps(['small_title','sub_title','title', 'show_title' ,'no_border'])

</script>

<template>
<section class="mb-[88px] md:mb-[120px]">
  <div class="container">
    <div v-if="show_title"
         :class="no_border ? '' : 'border-b border-[#E0E0E0] pb-6'"
         class="flex flex-wrap gap-10 items-end justify-between   mb-6">
      <div >
        <p v-if="small_title" class="mb-5 text-[#9F9F9F]" v-html="small_title"></p>
        <h2 class="text-[28px] md:text-4xl" v-html="title"></h2>
        <p v-if="sub_title" style="letter-spacing: -3%;" class="text-lg md:text-xl max-w-[580px] mt-6" v-html="sub_title"></p>
      </div>
      <slot name="extra"></slot>
    </div>
    <slot></slot>


  </div>
</section>
</template>

<style scoped>

</style>