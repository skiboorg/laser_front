<script setup lang="ts">
definePageMeta({
  header: 'black'
})
const route = useRoute()

const {$api} = useNuxtApp()
const {data} = await useAsyncData(()=>$api.blank.news_item(route.params.slug))

useSeoMeta({
  title: data.value.page_title ,
  description:data.value.page_description
})
</script>

<template>
  <div class="container pb-10">

      <div class="flex flex-wrap gap-2 mb-10 text-[#9F9F9F]">
        <nuxt-link to="/">Главная</nuxt-link>
        /
        <nuxt-link to="/news">Новости</nuxt-link>
        /
        <span>{{data.name}}</span>
      </div>

    <div class="block mb-10 md:mb-0 md:grid grid-cols-12 gap-10">
      <div class="col-span-12 md:col-span-8 mb-10 md:mb-0 ">


        <div class="flex items-center flex-wrap gap-3 mb-5">
          {{data.created}}
          <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in data.tags_list">
            {{tag}}
          </p>

        </div>
        <h1 class="text-4xl mb-10">{{data.name}}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div v-for="i in data.images" class="">
            <div class="aspect-video w-full">
              <img class="w-full h-full object-cover" :src="i.image" alt="">
            </div>
          </div>
        </div>
        <div class="html-content" v-html="data.content"></div>

      </div>
      <div class="col-span-12 md:col-span-4">
        <p class="text-primary text-xl mb-10">Смотрите также:</p>
        <div v-for="i in data.others" class="border-b border-[#E2E4E9] pb-8 mb-8 last:border-none">
          <p class="text-[#9F9F9F] mb-4">{{i.created}}</p>
          <a :href="`/news/${i.slug}`" class="border-b text-primary border-primary">
            {{i.name}}
          </a>
        </div>


      </div>
    </div>
  </div>

</template>

<style scoped>

</style>