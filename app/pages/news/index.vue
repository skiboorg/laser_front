<script setup lang="ts">
definePageMeta({
  header: 'black'
})
const route = useRoute()
console.log(route)
const {$api} = useNuxtApp()
const {data:news} =  useAsyncData(()=>$api.blank.news(false))
</script>

<template>
  <div class="container">
    <div class="flex gap-2 mb-5 text-[#9F9F9F]">
      <nuxt-link to="/">Главная</nuxt-link>
      /
      <span>Новости</span>
    </div>
  </div>
  <BlockSection :show_title="true" title="Новости компании" >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="" v-for="item in news?.results">
        <img class="w-full" :src="item.cover" alt="">
        <div class="px-5 py-7">
          <div class="flex items-center flex-wrap gap-3 mb-8">
            {{item.created}}
            <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in item.tags_list">
              {{tag}}
            </p>

          </div>

          <div class="text-2xl mb-6" >
            <nuxt-link :to="'/news/'+item.slug">{{item.name}}</nuxt-link>
          </div>
          <div class="mb-8" v-html="item.short_description"></div>
          <div class="flex gap-3">
            <img class="w-10 h-10 object-cover rounded-full" :src="item.photo" alt="">
            <div class="">
              <p class="font-medium">{{item.full_name}}</p>
              <p class="text-[#9F9F9F]">{{item.position}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </BlockSection>

</template>

<style scoped>

</style>