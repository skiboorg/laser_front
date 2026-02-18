<script setup lang="ts">
const props = defineProps(['tags','title','subtitle','bg_image','bg_video','no_button','alt_buttons'])
</script>

<template>
  <BlockTop :bg_video="bg_video" :bg_image="bg_image">
    <div class="flex flex-col items-start justify-center h-full xl:max-w-[840px] xl:border-l xl:border-r border-[#ffffff4d] pt-[105px] px-0 xl:px-10 xl:ml-40">
      <!--     <div class="h-full w-[1px] border-l border-[#525252] absolute left-[20%]"></div>-->
      <div v-if="tags" class="flex flex-wrap gap-2 mb-10">
        <UIBadge v-for="tag in tags">{{tag}}</UIBadge>

      </div>
      <p class="text-white text-3xl md:text-5xl mb-10 leading-[140%]">{{title}}</p>
      <p class="text-white max-w-[470px] text-[16px] mb-24 leading-[150%]" v-html="subtitle"></p>
      <div v-if="alt_buttons" class="flex flex-wrap gap-2">
        <Button severity="secondary" icon="pi pi-plus" icon-pos="right" label="Запросить стоимость"/>
        <button v-if="!no_button" class="p-button p-component  text-white p-button-outlined" data-p="outlined" type="button" aria-label="Получить расчет" data-pc-name="button" data-p-disabled="false" pc0_137="" data-pc-section="root" data-p-severity="info"><span class="p-button-icon p-button-icon-right pi pi-plus" data-p="right" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Бесплатная консультация</span></button>
      </div>
      <div v-else class="grid grid-cols-1 md:flex  gap-2">
        <Button  severity="secondary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
        <button v-if="!no_button" class="p-button p-component h-[40px] text-white p-button-outlined" data-p="outlined" type="button" aria-label="Получить расчет" data-pc-name="button" data-p-disabled="false" pc0_137="" data-pc-section="root" data-p-severity="info"><span class="p-button-icon p-button-icon-right pi pi-plus" data-p="right" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label" data-p="">Бесплатная консультация</span></button>
      </div>

    </div>
  </BlockTop>

</template>

<style scoped>

</style>