<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";

const props = defineProps(['items'])
const {$api} = useNuxtApp()
const {data:reviews} = await useAsyncData(()=>$api.blank.reviews())
const carousel = ref()
const carouselConfig = {
  itemsToShow: 4,
  wrapAround: false,
  gap:60,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'
  breakpoints:{
    // 700px and up
    300: {
      itemsToShow: 1,
      gap:10,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      //snapAlign: 'center',
      gap: 20,

    },
    1300: {
      itemsToShow: 4,
      snapAlign:'start',
      gap: 40,

    },
  }
}
</script>

<template>
  <client-only>
    <BlockSection :show_title="true" title="Отзывы наших клиентов" small_title="Отзывы" >
      <template #extra>
        <div class="flex gap-3">
          <svg @click="carousel.prev()" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" transform="translate(36 36) rotate(-180)" fill="#1E37A3"/>
            <path d="M11.6464 17.6464C11.4512 17.8417 11.4512 18.1583 11.6464 18.3536L14.8284 21.5355C15.0237 21.7308 15.3403 21.7308 15.5355 21.5355C15.7308 21.3403 15.7308 21.0237 15.5355 20.8284L12.7071 18L15.5355 15.1716C15.7308 14.9763 15.7308 14.6597 15.5355 14.4645C15.3403 14.2692 15.0237 14.2692 14.8284 14.4645L11.6464 17.6464ZM24 18L24 17.5L12 17.5L12 18L12 18.5L24 18.5L24 18Z" fill="white"/>
          </svg>
          <svg @click="carousel.next()" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" fill="#1E37A3"/>
            <path d="M24.3536 18.3536C24.5488 18.1583 24.5488 17.8417 24.3536 17.6464L21.1716 14.4645C20.9763 14.2692 20.6597 14.2692 20.4645 14.4645C20.2692 14.6597 20.2692 14.9763 20.4645 15.1716L23.2929 18L20.4645 20.8284C20.2692 21.0237 20.2692 21.3403 20.4645 21.5355C20.6597 21.7308 20.9763 21.7308 21.1716 21.5355L24.3536 18.3536ZM12 18V18.5H24V18V17.5H12V18Z" fill="white"/>
          </svg>



        </div>

      </template>
      <Carousel ref="carousel" v-bind="carouselConfig">
        <Slide v-for="i in reviews.results" class="flex flex-col items-start justify-start">
          <div class="px-5 py-7 border border-[#E0E0E0]">
            <div class="flex flex-wrap gap-3 mb-8">
              <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in i.tags_list">
                {{tag}}
              </p>

            </div>

            <div class="flex gap-3 mb-8">
              <img class="w-10 h-10 object-cover rounded-full" :src="i.photo" alt="">
              <div class="">
                <p class="font-medium">{{i.full_name}}</p>
                <p class="text-[#9F9F9F]">{{i.position}}</p>
              </div>
            </div>
            <div class="" v-html="i.text"></div>
        </div>
        </Slide>
      </Carousel>
    </BlockSection>
  </client-only>

</template>

<style scoped>

</style>