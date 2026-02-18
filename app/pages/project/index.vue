<script setup lang="ts">
definePageMeta({
  header: 'black'
})
const {$api} = useNuxtApp()
const {data:projects} = useAsyncData(()=>$api.blank.projects())
</script>

<template>
  <div class="container">
    <div class="flex gap-2 mb-5 text-[#9F9F9F]">
      <nuxt-link to="/">Главная</nuxt-link>
      /
      <span>Наши проекты</span>
    </div>
  </div>
  <BlockSection :no_border="true" :show_title="true" title="Наши проекты" >

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="" v-for="project in projects?.results">
        <img class="w-full object-cover h-[370px]" :src="project.image" alt="">
        <div class="px-4 py-6 border-l border-r border-b  border-[#E0E0E0]">
          <div class="flex flex-wrap gap-2 mb-8">
            <p class="px-3 py-[6px] bg-[#E8EBF6]" v-for="tag in project.tags_list" :key="tag.name">
              {{tag}}
            </p>
          </div>
          <p class=" text-2xl mb-8 max-w-[80%]">{{project.title}}</p>
          <div class="flex gap-4 mb-8">
            <nuxt-link class="link black" :to="`/project/${project.slug}`">Подробнее</nuxt-link>
          </div>
        </div>
      </div>



    </div>
  </BlockSection>
</template>

<style scoped>

</style>