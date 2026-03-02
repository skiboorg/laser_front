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
  <BlockSection :no_border="true" :show_title="true" title="Новости компании" >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="" v-for="item in news?.results">
        <img class="w-full" :src="item.cover" alt="">
        <div class="px-4 py-6 border-l border-r border-b  border-[#E0E0E0] ">
          <div class="flex items-center flex-wrap gap-3 mb-8">
            {{item.created}}
            <p class="px-3 py-[6px] bg-[#E8EBF6]" v-for="tag in item.tags_list">
              {{tag}}
            </p>
          </div>
          <div class="text-2xl mb-6" >
            <nuxt-link :to="'/news/'+item.slug">{{item.name}}</nuxt-link>
          </div>
          <div class="" v-html="item.short_description"></div>

        </div>

      </div>
    </div>
  </BlockSection>

</template>

<style scoped>

</style>