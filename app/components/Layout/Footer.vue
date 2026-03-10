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
  // {label:'Контакты',to:'/'},

]
</script>

<template>
  <footer class="border-t border-[#E2E4E9]">
    <div class="container">
      <div class="block md:grid grid-cols-1 md:grid-cols-12 border-b border-[#E0E0E0] py-10 mb-8 gap-4 md:gap-0 ">


        <div class="col-span-3 mb-10 md:mb-0">
          <svg width="120" height="17" viewBox="0 0 120 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.77303V6.01869H1.7379L3.87924 3.56081H15.0515L15.9514 2.64698V3.05176e-05H2.45168L0 2.77303Z" fill="#498FFF"/>
            <path d="M4.01149 6.20869L0.0625 10.8164V16.282H16.0139V12.4688H2.70553L5.22417 9.89484H16.0139V6.20869H4.01149Z" fill="#1E37A3"/>
            <path d="M85.3594 2.77301V6.01868H87.0973L89.2386 3.56079H100.411L101.311 2.64697V1.52588e-05H87.8111L85.3594 2.77301Z" fill="#1E37A3"/>
            <path d="M89.3709 6.20869L85.4219 10.8164V16.282H101.373V12.4688H88.0649L90.5835 9.89484H101.373V6.20869H89.3709Z" fill="#1E37A3"/>
            <path d="M34.4306 1.52588e-05L32.4375 2.02654V16.2821H46.8705V12.7881H36.4238V1.52588e-05H34.4306Z" fill="#1E37A3"/>
            <path d="M21.6485 6.28925L19.4492 8.52541V10.2724H21.1336H22.818H26.8032L29.0025 8.03625V6.28925H21.6485Z" fill="#1E37A3"/>
            <path d="M61.5854 6.87518L52.3662 16.2821H49.6211V13.2161L62.5233 1.52588e-05H65.3599V3.04274V16.2821H61.5854V6.87518Z" fill="#1E37A3"/>
            <path d="M68.1094 16.1423V12.7881H78.4371V10.9363L68.1094 6.50877V1.52588e-05L82.5424 2.14649e-05V3.07475H71.4231V4.75187L82.5424 9.35813V16.1423H68.1094Z" fill="#1E37A3"/>
            <path d="M120.001 13.2212V16.2821H117.26L109.653 8.53704V5.52251H112.463L116.221 9.37533L120.001 13.2212ZM107.894 3.09645V16.2821H104.125V3.09645H107.894ZM116.221 9.37533V3.86388H104.125V1.50162e-05L120.001 0.0267834V9.37184L116.221 9.37533Z" fill="#1E37A3"/>
          </svg>

          <p class="my-4 text-xs">Инжиниринговая компания в сфере<br>лазерной наплавки и упрочнения</p>
          <p class="mb-4 text-xs">г. Челябинск, Пр-кт Ленина, д. 83, этаж 4</p>
          <UIModalButton :is_primary="true"/>

        </div>

        <div class="flex flex-col col-span-9 md:grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
          <div class="col-span-12 md:col-span-4">
            <p class="text-[14px] font-medium mb-4 md:mb-8">Контакты</p>
            <div class="space-y-4">
              <a class="block text-[28px]" href="mailto:zakaz@e-laser.pro">zakaz@e-laser.pro</a>
              <a class="block text-[28px]" href="tel:+73512221777">+7 (351) 222-1-777</a>
            </div>


          </div>
          <div class="col-span-12 md:col-span-2">
            <p class="text-[14px] font-medium mb-4 md:mb-8">Компания</p>
            <div class="space-y-3">
              <nuxt-link class="block text-xs text-[#9F9F9F]" v-for="item in links" :to="`${item.to}`">{{item.label}}</nuxt-link>
            </div>
          </div>
          <div class="col-span-12 md:col-span-2">
            <p class="text-[14px] font-medium mb-4 md:mb-8">Услуги</p>
            <div class="space-y-3">
              <a class="block text-xs text-[#9F9F9F]" v-for="item in services?.results" :href="`/service/${item.slug}`">{{item.title}}</a>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4">
            <p class="text-[14px] font-medium mb-4 md:mb-8">Оборудование</p>
            <div class="space-y-3">
              <a class="block text-xs text-[#9F9F9F]" v-for="item in equipments?.results" :href="`/equipment/${item.slug}`">{{item.title}}</a>
            </div>
          </div>

        </div>


      </div>
      <div class="block md:flex justify-between pb-8 text-[#7B7B7B] text-xs space-y-6 md:space-y-0 ">
        <div class="space-y-2">
          <p><a  target="_blank" href="/req.pdf">Реквизиты ООО «Центр лазерных технологий Урал»</a></p>
          <p >© 2026 ЦЛТ «Урал». Все права защищены.</p>
        </div>

        <div class="block md:flex flex-wrap flex-col gap-2 space-y-2 md:space-y-0 lg:text-right">
          <p><a target="_blank" href="/policy.pdf">Политика конфиденциальности</a></p>
          <a  href="https://t.me/vkryaz" target="_blank" class="block"><p>Разработка сайта</p></a>

        </div>

      </div>
    </div>
  </footer>

</template>
