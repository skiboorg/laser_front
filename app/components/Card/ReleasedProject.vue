<script setup lang="ts">
defineProps(['project'])
</script>

<template>
<div class="">

  <div class="flex flex-wrap gap-2 mb-8">
    <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in project.tags_list" :key="tag.name">
      {{tag}}
    </p>


  </div>

  <p class=" text-2xl mb-8 max-w-[80%]">{{project.title}}</p>

  <div class="flex gap-4 mb-8">
    <nuxt-link class="link black" :to="`/project/${project.slug}`">Подробнее</nuxt-link>

  </div>
  <img class="w-full object-cover h-[370px]" :src="project.image" alt="">


</div>
</template>
e>