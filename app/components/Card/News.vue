<script setup lang="ts">
defineProps(["item","index"])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-5 pb-8  border-b border-[#E0E0E0] mb-8 last:mb-0">
    <div class="hidden md:block col-span-1">0{{index+1}}</div>
    <div class="col-span-12 md:col-span-4">
      <div class="aspect-video w-full">
        <img class="w-full h-auto md:w-[433px] md:h-[275px] object-cover" :src="item.cover" alt="">
      </div>
<!--      <img class="w-full object-cover h-full" :src="item.cover" alt="">-->
    </div>
    <div class="col-span-12 md:col-span-7">
      <div class="flex items-center gap-4 mb-8">
        <p >
          {{item.created}}
        </p>
        <p class="px-3 py-[6px] bg-[#E8EBF6]" v-for="tag in item.tags_list">
          {{tag}}
        </p>

      </div>
      <nuxt-link :to="`/news/${item.slug}`"><p class="text-2xl mb-8">{{item.name}}</p></nuxt-link>

      <p class="mb-8 leading-[150%]">{{item.short_description}}</p>
<!--      <div class="flex gap-3">-->
<!--        <img class="w-10 h-10 object-cover rounded-full" :src="item.photo" alt="">-->
<!--        <div class="">-->
<!--          <p class="font-medium">{{item.full_name}}</p>-->
<!--          <p class="text-[#9F9F9F]">{{item.position}}</p>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>

</style>