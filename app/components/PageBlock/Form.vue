<script setup lang="ts">

</script>

<template>
  <BlockSection :show_title="false">

<div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[105px] items-center">
  <div class="">
    <p  class="mb-5 text-[#9F9F9F]" >Оборудование</p>
    <h2 class="text-4xl border-b border-[#E0E0E0] pb-10" >Заявка на расчет<br>оборудования</h2>
    <p  class="max-w-[340px] mt-10" >Заполните форму, и наши менеджеры подберут под вас нужную комплектацию и модель оборудования, сориентируют по срокам доставки и стоимость.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
    <div class="col-span-12 md:col-span-6">
      <InputText fluid variant="filled" placeholder="Ваше имя*"/>
    </div>
    <div class="col-span-12 md:col-span-6">
      <InputText fluid variant="filled" placeholder="Наименование компании*"/>
    </div>
    <div class="col-span-12">
      <InputText fluid variant="filled" placeholder="Ваша почта*"/>
    </div>
    <div class="col-span-12 relative">
      <InputText fluid variant="filled" placeholder="Карточка предприятия*"/>
      <label class="absolute flex items-center gap-1 text-primary right-[16px] top-[19px]  cursor-pointer">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0889 0.0263672C9.4014 0.112305 8.72171 0.366211 8.13578 0.749023C7.84281 0.944336 7.28812 1.47949 4.24906 4.51465C0.417027 8.34668 0.444371 8.31543 0.202183 8.97949C-0.586879 11.1592 1.03421 13.3584 3.31937 13.2178C3.91312 13.1787 4.44828 13.0029 4.92875 12.6826C5.24515 12.4678 12.0498 5.67871 12.2256 5.39746C12.503 4.95215 12.585 4.26465 12.417 3.76856C12.0459 2.65918 10.7959 2.16699 9.7139 2.70606C9.54984 2.78809 8.82718 3.49121 6.06156 6.24902C4.16312 8.14356 2.585 9.74121 2.55375 9.79981C2.5225 9.8584 2.49906 9.99903 2.49906 10.1123C2.49906 10.4912 2.73734 10.7295 3.11625 10.7295C3.22953 10.7295 3.36234 10.71 3.40921 10.6865C3.45609 10.6631 5.03421 9.1084 6.91312 7.2334C9.94437 4.20606 10.3467 3.81934 10.4795 3.7959C10.6787 3.75684 10.8741 3.79981 11.0069 3.91309C11.1631 4.0459 11.2217 4.20606 11.2022 4.44434L11.1827 4.64746L7.67093 8.15137C3.94828 11.8623 4.07328 11.7529 3.57328 11.8857C2.99515 12.042 2.31156 11.8623 1.85453 11.4287C1.22562 10.835 1.10843 9.77637 1.59281 9.08106C1.65921 8.98731 3.29984 7.32715 5.24125 5.39356C9.07718 1.56152 8.95218 1.6748 9.62406 1.45215C10.6709 1.10449 11.8037 1.31543 12.6397 2.02246C13.0811 2.39356 13.4561 2.99512 13.6202 3.58106C13.7256 3.97168 13.7178 4.79199 13.6006 5.19434C13.5069 5.51856 13.3428 5.87402 13.1514 6.15918C13.0889 6.25684 11.4639 7.90918 9.54593 9.83106C5.7764 13.6084 5.9639 13.4014 6.03031 13.7451C6.10843 14.1592 6.56156 14.3975 6.92875 14.2256C6.99515 14.1943 8.62796 12.5889 10.5537 10.6592C14.3506 6.8584 14.3233 6.88965 14.6358 6.14746C15.6436 3.76074 14.4678 1.03809 12.085 0.237305C11.4873 0.0380859 10.6787 -0.0478516 10.0889 0.0263672Z" fill="#1E37A3"/>
        </svg>

        Выбрать файл
        <input type="file" class="hidden" @change="handleFileChange" />
      </label>
    </div>
    <div class="col-span-12">
      <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4">Оставляя заявку, вы соглашаетесь с политикой обработки персональных данных </label>
      </div>
    </div>
    <div class="col-span-12">
      <Button fluid severity="primary" icon="pi pi-plus" icon-pos="right" label="Отправить заявку"/>
    </div>

  </div>
</div>
  </BlockSection>
</template>

<style scoped>

</style>