<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
// })
const {slug} = useRoute().params
const {$api} = useNuxtApp()
const {data:equipment} = await useAsyncData(()=>$api.blank.equipment(slug))


</script>
<template>
  <BlockOffer
      :bg_image="equipment.background_image"
      :title="equipment.title"
      :subtitle="equipment.short_description"
      :tags="equipment.tags_list"
      :alt_buttons="true"
  />


  <BlockSection :show_title="true" title="Технические характеристики" small_title="Характеристики" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
    </template>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5" >

        <div class="bg-[#F6F6F6] px-5 py-7  " v-for="item in equipment.technical_specs">
          <div class="flex items-center justify-between pb-7 mb-7 border-b border-[#D8D8D8]">
            <p class="text-2xl text-primary">{{item.title}}</p>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="12" height="12" fill="#1E37A3"/>
            </svg>
          </div>
          <div class="html-content" v-html="item.content"> </div>
        </div>
      </div>
    </div>
  </BlockSection>
  <BlockSection :show_title="false" class="text-white py-[120px]" style="background-image: url(/video.jpg)">
    <p  class="mb-5 " >Преимущества</p>
    <h2 class="text-3xl md:text-4xl pb-6 md:pb-10 border-b border-[#B4B2B2] mb-6 md:mb-10" >Преимущества {{equipment.title}}</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div v-for="item in equipment.advantages" class="border border-white px-5 py-7  md:h-[320px] flex flex-col bg-white/10 backdrop-blur-sm">
        <div class="flex items-start justify-between">
          <p class="text-[16px] font-medium mb-20 md:mb-0">{{item.title}}</p>
          <div class="">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="12" height="12" fill="white"/>
            </svg>
          </div>
        </div>
        <p class="mt-auto">{{item.description}}</p>
      </div>
    </div>
  </BlockSection>
  <BlockSection :show_title="true" title="Отрасли применения" small_title="Отрасли">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="item,index in equipment.industries" :no_hover="true">
        <template #top>
          <p class="text-primary">0{{index+1}}</p>
        </template>
        <template #title>{{item.name}}</template>
        <template #text>
          {{item.description}}
        </template>
      </CardInfo>

    </div>
  </BlockSection>
  <BlockPhotosSlider :items="equipment.photos"/>
  <BlockFeedback :items="['1','1','1','1','1','1','1','1',]"/>
  <PageBlockFaq/>

</template>