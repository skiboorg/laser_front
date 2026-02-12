<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
// })
const {$api} = useNuxtApp()
const {data:services} = await useAsyncData(()=>$api.blank.services())
const {data:equipments} = await useAsyncData(()=>$api.blank.equipments())
const {data:projects} = await useAsyncData(()=>$api.blank.projects())

</script>
<template>
  <BlockOffer
      title="Продлеваем ресурс критических деталей с помощью лазерных технологий наплавки и упрочнения"
      subtitle="Минимизируем простой оборудования, снижаем стоимость ремонта и повышаем надежность производственных процессов."
      :tags="['Прочность без компромиссов','Инновации, которым доверяют детали']"
  />

  <BlockSection :show_title="true" title="Наши услуги" small_title="Услуги">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="service in services.results" :key="service.id" >
        <template #top>
          <img class="w-8 h-8 object-contain" :src="service.icon"></img>
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
  <BlockSection :show_title="true" title="Виды оборудования" small_title="Оборудование" sub_title="У нас представлен ассортимент оборудования, который мы можем адаптировать под ваши запросы, вы можете оформить заявку на его приобретение на нашем сайте.">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardEquipment v-for="equipment in equipments.results" :equipment="equipment"/>
    </div>
  </BlockSection>
  <PageBlockForm/>
  <PageBlockAbout/>
  <BlockSection :show_title="true" title="Реализованные проекты" small_title="Оборудование" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Все проекты"/>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardReleasedProject v-for="project in projects.results" :project="project"/>

    </div>
  </BlockSection>
  <BlockSection :show_title="true" title="Новости компании" small_title="Новости" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Все новости"/>
    </template>

    <CardNews/>
    <CardNews/>

  </BlockSection>
<PageBlockFaq/>

</template>