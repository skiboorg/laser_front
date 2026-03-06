<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
// })
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

const activeBreakpoint = breakpoints.active()

const {slug} = useRoute().params
const {$api} = useNuxtApp()
const {data:service} = await useAsyncData(()=>$api.blank.service(slug))

useSeoMeta({
  title: service.value.ment_title || service.value.title,
  description:service.value.meta_description || service.value.meta_description
})

function vkIframeUrl(link: string) {
  // Пример link: https://vkvideo.ru/video-93042683_456240169
  const match = link.match(/video-?(\d+)_?(\d+)/);
  if (!match) return '';
  const oid = `-${match[1]}`;  // ставим минус перед oid
  const id = match[2];
  return `https://vkvideo.ru/video_ext.php?oid=${oid}&id=${id}&autoplay=0`;
}

const is_mobile = computed(()=>{
  return  activeBreakpoint.value === 'mobile' || activeBreakpoint.value === 'tablet'
})

</script>
<template>
  <BlockOffer
      :bg_image="is_mobile? service.image_background_mobile :service.image_background"
      :title="service.title"
      :subtitle="service.short_description"
      :tags="service.tags_list"
  />

  <BlockSection :show_title="false">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[105px] items-center">
      <div class="">
        <p  class="mb-5 text-[#9F9F9F]" >Об услуге</p>
        <h2 class="text-4xl border-b border-[#E0E0E0] pb-10" >{{service.title}}</h2>
        <div class="mt-10 max-w-[90%]" v-html="service.description">
        </div>
      </div>
      <div class="" v-if="service.show_video">
        <iframe
            :src="vkIframeUrl(service.vk_video)"
            width="100%"
            height="300px"
            style="background-color: #000"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
        ></iframe>
      </div>
      <div v-else class="">
        <img :src="service.description_image" alt="">
      </div>

    </div>
  </BlockSection>

  <BlockSection :show_title="true" :title="service.title" small_title="Преимущества">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="item,index  in service.advantages" :no_hover="true">
        <template #top>
          <p class="text-primary">      0{{index+1}}</p>

        </template>
        <template #title>{{item.title}}</template>
        <template #text>
         {{item.description}}
        </template>
      </CardInfo>
    </div>
  </BlockSection>
  <BlockSection :show_title="false" class="text-white py-[120px]" style="background-image: url(/bg_otr.png)">
    <p  class="mb-5 " >Сферы</p>
    <h2 class="text-3xl md:text-4xl pb-6 md:pb-10 border-b border-[#B4B2B2] mb-6 md:mb-10" >Отрасли применения</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div v-for="item in service.industries"
           class="border border-white p-5  h-[320px] flex flex-col bg-white/10 backdrop-blur-sm">
        <div class="flex items-center justify-between">
          <p class="text-2xl">{{item.name}}</p>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" fill="white"/>
          </svg>
        </div>
        <p class="mt-auto">{{item.description}}</p>
      </div>
    </div>
  </BlockSection>
  <BlockSection :show_title="true" title="Технические характеристики" small_title="Характеристики" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
    </template>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="bg-[#F6F6F6] px-5 py-7  "  v-for="item in service.technical_specs">
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
  <BlockSection :show_title="true" title="Этапы работы" small_title="Этапы">
    <div
        v-for="(item, index) in service.steps"
        :key="index"
        class="flex flex-col items-start md:grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 pb-8 border-b border-[#E0E0E0] mb-8 md:items-center"
    >
      <div class="col-span-12 md:col-span-2">
        <p class="text-primary text-[14px] md:text-2xl">0{{ index + 1 }}</p>
      </div>

      <div class="col-span-12 md:col-span-4">
        <p class="text-2xl text-primary max-w-[80%]" >{{item.title}}</p>
      </div>
      <div class="col-span-12 md:col-span-6 md:max-w-[90%] ">{{item.text}}</div>
    </div>
  </BlockSection>
  <BlockSection :show_title="true" title="Реализованные проекты" small_title="Оборудование" >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Все проекты"/>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardReleasedProject v-for="project in service.projects" :project="project"/>
    </div>
  </BlockSection>

  <BlockFeedback :items="['1','1','1','1','1','1','1','1',]"/>
  <PageBlockFaq/>

</template>