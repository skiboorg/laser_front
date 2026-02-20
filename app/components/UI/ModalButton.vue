<script setup lang="ts">
defineProps(['is_primary'])
const visible = ref(false)
</script>

<template>
  <Button  @click="visible = true" :severity="is_primary ? 'primary' : 'secondary'" icon="pi pi-plus" icon-pos="right" label="Получить расчет"/>
  <Dialog v-model:visible="visible" modal header="Получить расчет" class="w-[90vw] md:w-[50vw] lg:w-[40vw]">
    <BlockForm/>
  </Dialog>
</template>

<style scoped>

</style>