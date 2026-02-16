<script setup lang="ts">
definePageMeta({
  header: 'black'
})
const {$api} = useNuxtApp()
const {data:services} = await useAsyncData(()=>$api.blank.services())
</script>

<template>
  <div class="container">
    <div class="flex gap-2 mb-5 text-[#9F9F9F]">
      <nuxt-link to="/">Главная</nuxt-link>
      /
      <span>Наши услуги</span>
    </div>
  </div>
  <BlockSection :show_title="true" title="Наши услуги" >

    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="service in services.results" :key="service.id" >
        <template #top>
          <img class="w-8 h-8 object-cover" :src="service.icon"></img>
        </template>
        <template #title>{{service.title}}</template>
        <template #text>
          {{service.short_description}}
        </template>
        <template #bottom>
          <nuxt-link :to="`/service/${service.slug}`" class="link">Подробнее</nuxt-link>
        </template>
      </CardInfo>

    </div>
  </BlockSection>
</template>

<style scoped>

</style>