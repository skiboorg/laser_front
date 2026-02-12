<script setup lang="ts">
defineProps(['equipment'])
</script>

<template>
<div class="">
  <div class="mb-6">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="12" height="12" fill="#1E37A3"/>
    </svg>
  </div>
  <p class="text-primary text-2xl mb-6">{{equipment.title}}</p>
  <p class="max-w-full md:max-w-[85%] mb-8">{{equipment.short_description}}</p>
  <div class="flex gap-4 mb-8">
    <nuxt-link class="link" :to="`/equipment/${equipment.slug}`">Подробнее</nuxt-link>
    <p class="link">Запросить стоимость</p>
  </div>
  <img class="w-full object-cover h-[370px]" :src="equipment.main_image" alt="">


</div>
</template>
e>