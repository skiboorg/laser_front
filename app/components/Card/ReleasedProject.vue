<script setup lang="ts">
defineProps(['project'])
</script>

<template>
<div class="border-b md:border-none border-[#E0E0E0] last:border-none">

  <div class="flex flex-wrap gap-2 mb-7 ">
    <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in project.tags_list" :key="tag.name">
      {{tag}}
    </p>


  </div>

  <p class=" text-2xl mb-7 max-w-[80%]">{{project.title}}</p>

  <div class="flex gap-4 mb-7">
    <nuxt-link class="link black" :to="`/project/${project.slug}`">Подробнее</nuxt-link>
  </div>
  <div class="aspect-video w-full mb-10 md:mb-0">
    <img class="w-full object-cover " :src="project.image" alt="">
  </div>
</div>
</template>
