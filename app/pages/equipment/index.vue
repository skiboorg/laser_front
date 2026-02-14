<script setup lang="ts">
definePageMeta({
  header: 'black'
})
const route = useRoute()
console.log(route)
const {$api} = useNuxtApp()
const {data:equipments} = await useAsyncData(()=>$api.blank.equipments())
</script>

<template>

  <BlockSection :show_title="false" >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardEquipment v-for="equipment in equipments.results" :equipment="equipment"/>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>