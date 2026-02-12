<script setup lang="ts">
const {$api} = useNuxtApp()
const {data:equipments} = await useAsyncData(()=>$api.blank.equipments())
</script>

<template>
  <BlockTop >
    <div class="flex flex-col items-start justify-center h-full max-w-[740px] border-l border-r border-[#525252] px-10 ml-40">
      <!--     <div class="h-full w-[1px] border-l border-[#525252] absolute left-[20%]"></div>-->

      <p class="text-white text-5xl mb-10">Виды оборудования</p>
      <p class="text-white max-w-[370px] text-[16px] mb-24">short_description</p>
      <div class="flex gap-3">
        <Button severity="secondary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
        <Button class="!text-white hover:!text-black" outlined severity="secondary" icon="pi pi-plus" icon-pos="right" label="Бесплатная консультация"/>
      </div>
    </div>
  </BlockTop>
  <BlockSection :show_title="true" title="Виды оборудования" small_title="Оборудование" sub_title="У нас представлен ассортимент оборудования, который мы можем адаптировать под ваши запросы, вы можете оформить заявку на его приобретение на нашем сайте.">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardEquipment v-for="equipment in equipments.results" :equipment="equipment"/>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>