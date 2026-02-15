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
      <CardInfo >
        <template #top>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25.9179V32H5.71915L32 5.32181V0H25.5319L0 25.9179Z" fill="#1E37A3"/>
            <path d="M16 25.9306V32H21.5992L32 21.4857V16H25.9429L16 25.9306Z" fill="#1E37A3"/>
            <path d="M0 9.93063V16H5.59917L16 5.48571V0H9.94286L0 9.93063Z" fill="#1E37A3"/>
          </svg>
        </template>
        <template #title>Лазерная наплавка</template>
        <template #text>
          Ремонт изношенных поверхностей, восстановление геометрии деталей, путем нанесения нового металла с использованием лазерного луча.

        </template>
        <template #bottom>
          <a href="#" class="link">Подробнее</a>
        </template>
      </CardInfo>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>