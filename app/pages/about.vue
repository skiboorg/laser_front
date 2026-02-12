<script setup lang="ts">
// definePageMeta({
//   guest: true,
//   layout: 'auth'
//
const features = [
  {title:'Своя исследовательская лаборатория', description:'Описание 1'},
  {title:'Сертифицированное оборудование', description:'Описание 1'},
  {title:'Опытная команда технических специалистов', description:'Описание 1'},
  {title:'Оптимальные сроки исполнения заказа', description:'Описание 1'},
]

const mission = [
  {title:'Создание новой инновационной продукции', icon:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect x="25.332" y="25.3334" width="6.66666" height="6.66667" fill="#1E37A3"/>\n' +
        '<rect x="12.668" y="13" width="6.66666" height="19" fill="#1E37A3"/>\n' +
        '<rect x="12.668" y="19.6666" width="6.66667" height="19.3333" transform="rotate(-90 12.668 19.6666)" fill="#1E37A3"/>\n' +
        '<rect width="6.66666" height="32" fill="#1E37A3"/>\n' +
        '<rect y="6.66663" width="6.66667" height="32" transform="rotate(-90 0 6.66663)" fill="#1E37A3"/>\n' +
        '</svg>'},
  {title:'Снижение себестоимости продукции, производимой на вашем предприятии', icon:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0 7.95374V0L16 7.95374V16L0 7.95374Z" fill="#1E37A3"/>\n' +
        '<path d="M16 7.95374V0L32 7.95374V16L16 7.95374Z" fill="#1E37A3"/>\n' +
        '<path d="M0 24.0461V31.9999L16 24.0461V15.9999L0 24.0461Z" fill="#1E37A3"/>\n' +
        '<path d="M16 24.0461V31.9999L32 24.0461V15.9999L16 24.0461Z" fill="#1E37A3"/>\n' +
        '</svg>'},
  {title:'Повышение качества<br>и надежности ваших изделий', icon:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0 25.9179V32H5.71915L32 5.32181V0H25.5319L0 25.9179Z" fill="#1E37A3"/>\n' +
        '<path d="M16 25.9306V32H21.5992L32 21.4857V16H25.9429L16 25.9306Z" fill="#1E37A3"/>\n' +
        '<path d="M0 9.93063V16H5.59917L16 5.48571V0H9.94286L0 9.93063Z" fill="#1E37A3"/>\n' +
        '</svg>'},
  {title:'Повышение прибыли вашего бизнеса', icon:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0 0L32 0C32 8.83656 24.8366 16 16 16C7.16344 16 0 8.83656 0 0Z" fill="#1E37A3"/>\n' +
        '<path d="M0 32C0 23.1634 7.16344 16 16 16C24.8366 16 32 23.1634 32 32H0Z" fill="#1E37A3"/>\n' +
        '</svg>'},
    ]

</script>
<template>
  <BlockOffer
      title="E-Laser"
      subtitle="Российская инжиниринговая компания, специализирующаяся на применении технологий лазерной наплавки и упрочнения поверхностей для восстановления поврежденных деталей оборудования в различных областях промышленности.
      <br>
      <br>
Проводим аудит технического состояния механизмов, машин и оборудования, предоставляем комплекс инженерно-технологических решений.
"

  />

  <BlockSection :show_title="true" title="Сильные стороны" small_title="Преимущества">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <CardInfo v-for="(item,index) in features">
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
  <BlockSection :show_title="true" title="Миссия компании" small_title="Миссия"
                sub_title="Мы решаем сложнейшие инженерные задачи по ремонту и модернизации промышленного оборудования наших заказчиков благодаря использованию современных лазерных технологий и индивидуальному подходу. Повышаем запас прочности российской промышленности."
  >
    <template #extra>
      <Button  severity="primary" icon="pi pi-plus" icon-pos="right" label="Скачать презентацию"/>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div
          v-for="item in mission"
          class="group flex flex-col h-[180px]
         px-5 py-7
         border border-[#E0E0E0]
         transition-colors
         bg-white hover:bg-[#D0D4E3] hover:border-[#D0D4E3]
         "
      >
        <p v-html="item.icon"></p>

        <p class="mt-auto text-[14px]" v-html="item.title"></p>
      </div>

    </div>
  </BlockSection>
  <BlockSection :show_title="true" title="Команда E-Laser" small_title="Команда">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div v-for="i in 8" class="">
        <img  class="w-full h-[360px] object-cover " src="https://placehold.co/600x400" alt="">
        <div class="p-5 bg-[#EBEBEB]">
          <p class="text-[16px] font-medium mb-4">Евгений Михайлович Еремин</p>
          <p>Евгений Михайлович Еремин</p>
        </div>

      </div>

    </div>
  </BlockSection>
  <PageBlockAbout/>



</template>