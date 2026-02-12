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
      :bg_image="equipment.image_background"
      :title="equipment.title"
      :subtitle="equipment.short_description"
      :tags="equipment.tags_list"
  />


  <BlockSection :show_title="true" title="Технические характеристики" small_title="Характеристики" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
    </template>

    <div class="grid grid-cols-2 gap-5">
      <div class="bg-[#F6F6F6] px-5 py-7  ">
        <div class="flex items-center justify-between pb-7 mb-7 border-b border-[#D8D8D8]">
          <p class="text-2xl text-primary">Габариты обрабатываемых деталей</p>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" fill="#1E37A3"/>
          </svg>


        </div>
        <img class="w-full object-cover h-auto" src="https://placehold.co/600x400" alt="">
      </div>
      <div class="bg-[#F6F6F6] px-5 py-7  ">
        <div class="flex items-center justify-between pb-7 mb-7 border-b border-[#D8D8D8]">
          <p class="text-2xl text-primary">Описание главного модуля</p>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" fill="#1E37A3"/>
          </svg>


        </div>
        <div class="space-y-7">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias atque, distinctio expedita iste laboriosam modi odit optio quia sit!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias atque, distinctio expedita iste laboriosam modi odit optio quia sit!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias atque, distinctio expedita iste laboriosam modi odit optio quia sit!</p>
        </div>
      </div>
    </div>



  </BlockSection>



  <BlockSection :show_title="false" class="text-white py-[120px]" style="background-image: url(/video.jpg)">


    <p  class="mb-5 " >Преимущества</p>
    <h2 class="text-4xl  pb-[60px] border-b border-[#B4B2B2] mb-10" >Преимущества {{equipment.title}}</h2>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in equipment.advantages" class="border border-white px-5 py-7 h-[320px] flex flex-col">
        <div class="flex items-center justify-between">
          <p class="text-2xl">{{item.title}}</p>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" fill="white"/>
          </svg>

        </div>
        <p class="mt-auto">{{item.description}}</p>
      </div>


    </div>


  </BlockSection>
  <BlockSection :show_title="true" title="Отрасли применения" small_title="Отрасли">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="item,index in equipment.industries">
        <template #top>
          0{{index+1}}
        </template>
        <template #title>{{item.title}}</template>
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