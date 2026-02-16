<script setup lang="ts">
import {useRoute} from "#vue-router";

const route = useRoute()
const is_header_black = computed(() => {
  return route.meta.header === 'black'
})

const {$api} = useNuxtApp()
const {data:services} =  useAsyncData(()=>$api.blank.services())
const {data:equipments} =  useAsyncData(()=>$api.blank.equipments())


const links = [

  {label:'О компании',to:'/about'},
  {label:'Наши проекты',to:'/project'},
  {label:'Новости',to:'/news'},
  {label:'Контакты',to:'/'},

]
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-12 border-b border-[#E0E0E0] pb-10 mb-8">


      <div class="col-span-3">
        <BlockLogo :logo_black="!is_header_black"/>

        <p class="my-4 ">Инжиниринговая компания в сфере лазерной наплавки и упрочнения</p>
        <p class="mb-4 ">г. Челябинск, Пр-кт Ленина, д. 83, этаж 4</p>
        <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
      </div>

      <div class="col-span-9 grid grid-cols-4">
        <div >


        </div>
        <div class="">
          <p class="text-[16px] font-medium mb-8">Компания</p>
          <div class="space-y-3">
            <nuxt-link class="block" v-for="item in links" :to="`/service/${item.to}`">{{item.label}}</nuxt-link>
          </div>
        </div>
        <div class="">
          <p class="text-[16px] font-medium mb-8">Услуги</p>
          <div class="space-y-5">
            <nuxt-link class="block" v-for="item in services?.results" :to="`/service/${item.slug}`">{{item.title}}</nuxt-link>
          </div>
        </div>
        <div class="">
          <p class="text-[16px] font-medium mb-8">Оборудование</p>
          <div class="space-y-5">
            <nuxt-link class="block" v-for="item in equipments?.results" :to="`/equipment/${item.slug}`">{{item.title}}</nuxt-link>
          </div>
        </div>

      </div>


    </div>
    <div class="flex justify-between pb-8 text-[#7B7B7B]">
      <p>© 2026 ЦЛТ «Урал». Все права защищены.</p>
      <p>Политика конфиденциальности</p>
    </div>
  </div>
</template>
