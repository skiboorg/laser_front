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
  <header class=" w-full top-0 left-0  z-20  py-4 md:py-8  border-b "
          :class="is_header_black ? 'mb-14 border-[#DEDEDE]' : 'absolute text-white border-[#ffffff4d]'"
  >
    <div class="container mx-auto flex items-center justify-between ">
      <div class="flex items-center ">
        <BlockLogo :logo_black="is_header_black"/>
        <nav  class="hidden lg:block ml-20">
          <ul class="flex gap-7">
            <li v-for="link in links"><NuxtLink class="font-medium "  :to="link.to">{{link.label}}</NuxtLink></li>
          </ul>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-8" >
              <div class="">
                <p><a class="font-medium" href="tel:+73512221777">+7 (351) 222-1-777</a></p>
                <p><a class="font-medium" href="mailto:zakaz@e-laser.pro">zakaz@e-laser.pro</a></p>
              </div>
        <UIModalButton :is_primary="is_header_black"/>
<!--            <Button :severity="is_header_black ? 'primary' : 'secondary'" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>-->
      </div>
      <div class="flex lg:hidden items-stretch justify-end gap-2 w-full">
        <a class="font-medium block" href="mailto:zakaz@e-laser.pro">
          <Button class="h-full" outlined :severity="is_header_black ? 'primary' : 'secondary'">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.37351 0.0519676C0.879644 0.158239 0.438918 0.489554 0.207615 0.933393C0.138849 1.06154 0.0919629 1.16781 0.0982144 1.17094C0.10134 1.17719 1.73297 2.26491 3.7178 3.58705C6.14336 5.20299 7.38739 6.01253 7.49992 6.05316C7.7406 6.13755 8.25947 6.13755 8.50015 6.05316C8.61267 6.01253 9.85671 5.20299 12.2823 3.58705C14.2671 2.26491 15.8987 1.17719 15.9019 1.17094C15.9081 1.16781 15.8612 1.06154 15.7925 0.933393C15.558 0.483304 15.1204 0.155113 14.6109 0.048842C14.2921 -0.0167961 1.68608 -0.0167961 1.37351 0.0519676Z"
                    :fill="is_header_black ? '#1E37A3' : 'white'"/>
              <path d="M0 6.35321C0 9.8289 0.00937716 10.4853 0.0468858 10.6478C0.212549 11.3542 0.768927 11.8637 1.49409 11.9731C1.63475 11.995 3.82588 12.0043 8.1425 11.9981C14.3064 11.9887 14.5877 11.9856 14.7534 11.9324C15.2191 11.7762 15.5848 11.473 15.7911 11.0792C16.0162 10.6509 16.0037 10.9072 15.9974 6.35009L15.9881 2.2524L12.6373 4.48722C10.7931 5.71558 9.20212 6.76267 9.09897 6.8158C8.75201 6.98771 8.47382 7.0471 8.00184 7.0471C7.53923 7.0471 7.24854 6.98771 6.93285 6.82831C6.84532 6.78455 5.25746 5.73746 3.40391 4.49972C1.55036 3.2651 0.0250058 2.2524 0.0156286 2.2524C0.00625144 2.2524 0 4.09964 0 6.35321Z"
                    :fill="is_header_black ? '#1E37A3' : 'white'"/>
            </svg>
          </Button>
        </a>
        <a class="font-medium block" href="tel:+73512221777" >
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
    </template>
    <div class="flex flex-col items-start justify-between h-full w-full">
      <div class="flex flex-col items-start gap-5 mb-4 mt-[60px] w-full">
        <nuxt-link class="text-primary text-lg" v-for="item in links" :to="item.to">{{item.label}}</nuxt-link>
      </div>
    </div>


  </Drawer>
</template>
