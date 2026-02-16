<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuActive = ref(false)

watch(() => route.fullPath, () => {
  mobileMenuActive.value = false
});

const is_header_black = computed(() => {
  return route.meta.header === 'black'
})

const links = [

  {label:'О компании',to:'/about'},
  {label:'Оборудование',to:'/equipment'},
  {label:'Услуги',to:'/service'},
  {label:'Наши проекты',to:'/project'},
  {label:'Новости',to:'/news'},
  // {label:'Контакты',to:'/#test'},

]
</script>

<template>
  <header class=" w-full top-0 left-0  z-20   py-8  border-b "
          :class="is_header_black ? 'mb-14 border-[#DEDEDE]' : 'absolute text-white border-[#525252]'"
  >
    <div class="container mx-auto flex items-center justify-between ">
        <BlockLogo :logo_black="is_header_black"/>
      <nav  class="hidden lg:block">
        <ul class="flex gap-7">
          <li v-for="link in links"><NuxtLink class="font-medium "  :to="link.to">{{link.label}}</NuxtLink></li>
        </ul>
      </nav>
      <div class="hidden lg:flex items-center gap-8" >
              <div class="">
                <p><a class="font-medium" href="tel:8 912 000 00 00">8 912 000 00 00</a></p>
                <p><a class="font-medium" href="mailto:info@e-laser.pro">info@e-laser.pro</a></p>
              </div>
            <Button :severity="is_header_black ? 'primary' : 'secondary'" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
      </div>
      <div class="flex lg:hidden items-stretch justify-end gap-2 w-full">
        <a class="font-medium block" href="tel:8 912 000 00 00">
          <Button class="h-full" outlined :severity="is_header_black ? 'primary' : 'secondary'">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.26198 0.0478115C2.09323 0.107186 1.90573 0.269687 1.22448 0.944687C0.471357 1.69156 0.277607 1.98531 0.0994824 2.65406C-0.00676759 3.05406 -0.0317676 3.87281 0.0432324 4.38844C0.352607 6.46656 1.88698 9.09781 4.14011 11.4009C6.68698 14.0072 9.45573 15.6697 11.7339 15.9697C12.1839 16.0291 12.9807 15.9916 13.3432 15.8947C14.0151 15.7166 14.3057 15.5259 15.0526 14.7728C15.9526 13.8634 15.9995 13.7947 15.9995 13.3416C15.9995 12.9134 16.0089 12.9259 14.3995 11.3228C12.7995 9.72906 12.8839 9.79469 12.4057 9.79469C12.0151 9.79781 11.9307 9.84781 11.3089 10.4541C10.7682 10.9822 10.6276 11.0822 10.2901 11.1697C9.76198 11.3072 9.34011 11.1634 8.35886 10.5134C7.74948 10.1072 7.30886 9.74781 6.78073 9.21656C6.24948 8.68844 5.89011 8.24781 5.48386 7.63844C4.83386 6.65719 4.69011 6.23531 4.82761 5.70719C4.91511 5.36656 5.01511 5.22594 5.54323 4.68531C6.12761 4.09156 6.19011 3.98844 6.21198 3.62594C6.22136 3.43531 6.21198 3.35094 6.15573 3.20094C6.09011 3.02281 6.01198 2.93844 4.67448 1.59781C3.05886 -0.0240631 3.08386 -0.00531387 2.64323 0.000936508C2.50261 0.000936508 2.33386 0.0228119 2.26198 0.0478115Z"
                    :fill="is_header_black ? '#1E37A3' : 'white'"
                   />
            </svg>
          </Button>
        </a>
        <Button  class="!w-auto" :severity="is_header_black ? 'primary' : 'secondary'" icon="pi pi-plus" icon-pos="right" label="Меню"  @click="mobileMenuActive=true"/>
      </div>

    </div>
  </header>
  <Drawer v-model:visible="mobileMenuActive" header=" " position="right">
    <template #header>
      <BlockLogo/>
    </template>
    <div class="flex flex-col items-start justify-between h-full w-full">
      <div class="flex flex-col items-start gap-5 mb-4 mt-[60px] w-full">
        <nuxt-link class="text-primary text-lg" v-for="item in links" :to="item.to">{{item.label}}</nuxt-link>
      </div>
    </div>


  </Drawer>
</template>
