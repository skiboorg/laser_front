<script setup lang="ts">
defineProps(["item","index"])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-5 pb-8  border-b border-[#E0E0E0] mb-8 last:mb-0">
    <div class="hidden md:block col-span-1">0{{index+1}}</div>
    <div class="col-span-12 md:col-span-4">
      <img class="w-full object-cover h-full" :src="item.cover" alt="">
    </div>
    <div class="col-span-12 md:col-span-7">
      <div class="flex items-center gap-2 mb-8">
        <p >
          {{item.created}}
        </p>
        <p class="px-3 py-2 bg-[#E8EBF6]" v-for="tag in item.tags_list">
          {{tag}}
        </p>

      </div>
      <p class="text-2xl mb-8">{{item.name}}</p>
      <p class="mb-8">{{item.short_description}}</p>
      <div class="flex gap-3">
        <img class="w-10 h-10 object-cover rounded-full" src="https://placehold.co/600x400" alt="">
        <div class="">
          <p class="font-medium">Виолетта Ежова</p>
          <p class="text-[#9F9F9F]">Маркетолог E-Laser</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>