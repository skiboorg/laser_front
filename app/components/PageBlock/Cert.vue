<script setup lang="ts">

</script>

<template>
  <BlockSection :show_title="true" title="Сертификаты и лицензии" small_title="Документация" >
    <div class="flex items-start gap-4 flex-wrap">
      <Image alt="Image" preview>
        <template #previewicon>
          <i class="pi pi-search"></i>
        </template>
        <template #image>
          <img src="~assets/images/cert/1.png" alt="image" />
        </template>
        <template #preview="slotProps">
          <img src="~assets/images/cert/1_b.png" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>
      <Image alt="Image" preview>
        <template #previewicon>
          <i class="pi pi-search"></i>
        </template>
        <template #image>
          <img src="~assets/images/cert/2.png" alt="image" />
        </template>
        <template #preview="slotProps">
          <img src="~assets/images/cert/2_b.png" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>
      <Image alt="Image" preview>
        <template #previewicon>
          <i class="pi pi-search"></i>
        </template>
        <template #image>
          <img src="~assets/images/cert/3.png" alt="image" />
        </template>
        <template #preview="slotProps">
          <img src="~assets/images/cert/3_b.png" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>


    </div>
  </BlockSection>
</template>

<style scoped>

</style>