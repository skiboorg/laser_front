<script setup lang="ts">
const props = defineProps(['tags','title','subtitle','bg_image'])
</script>

<template>
  <BlockTop :bg_image="bg_image">
    <div class="flex flex-col items-start justify-center h-full xl:max-w-[740px] xl:border-l xl:border-r border-[#525252] px-0 md:px-10 xl:ml-40">
      <!--     <div class="h-full w-[1px] border-l border-[#525252] absolute left-[20%]"></div>-->
      <div v-if="tags" class="flex flex-wrap gap-2 mb-10">
        <UIBadge v-for="tag in tags">{{tag}}</UIBadge>

      </div>
      <p class="text-white text-3xl md:text-5xl mb-10">{{title}}</p>
      <p class="text-white max-w-[470px] text-[16px] mb-24" v-html="subtitle"></p>
      <Button severity="secondary" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>

    </div>
  </BlockTop>

</template>

<style scoped>

</style>