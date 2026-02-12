<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:services} = await useAsyncData(()=>$api.blank.services())
</script>

<template>
  <BlockTop >
    <div class="flex flex-col items-start justify-center h-full max-w-[740px] border-l border-r border-[#525252] px-10 ml-40">
      <!--     <div class="h-full w-[1px] border-l border-[#525252] absolute left-[20%]"></div>-->

      <p class="text-white text-5xl mb-10">Наши услугиы</p>
      <p class="text-white max-w-[370px] text-[16px] mb-24">short_description</p>
      <div class="flex gap-3">
        <Button severity="secondary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
        <Button class="!text-white hover:!text-black" outlined severity="secondary" icon="pi pi-plus" icon-pos="right" label="Бесплатная консультация"/>
      </div>
    </div>
  </BlockTop>
  <BlockSection :show_title="true" title="Наши услуги" small_title="Услуги">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="service in services.results" :key="service.id" >
        <template #top>
          <img :src="service.icon"></img>
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