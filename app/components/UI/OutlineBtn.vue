<script setup lang="ts">
defineProps(['label'])
</script>

<template>
<button class="btn ">
  {{label}}
  <i class="pi pi-plus"></i>
</button>
</template>

<style lang="sass">
.btn
  border: 1px solid #ffffff
  display: flex
  align-items: center
  gap: 8px
  color: #ffffff
  padding: 0.58rem 1rem
  &:hover
    background-color: #ffffff
    color: #000
    transition: all .2s linear

</style>