<script setup lang="ts">
import { ref } from 'vue'

const items = [
  {
    q: 'Какие задачи можно решить с помощью лазерных технологий?',
    a: 'Лазерные технологии позволяют устранять износ, эрозию, задиры, абразивное и ударное повреждение, восстанавливать геометрию деталей, повышать их износостойкость и срок службы.'
  },
  {
    q: 'Где применяются лазерные технологии?',
    a: 'Они широко применяются в машиностроении, энергетике, нефтегазовой отрасли и авиации.'
  },
]

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <BlockSection
      :show_title="true"
      title="Часто задаваемые вопросы"
      small_title="FAQ"
  >
    <div
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-12 pb-8 border-b border-[#E0E0E0] mb-8"
    >
      <div class="col-span-2">
        <p>0{{ index + 1 }}</p>
      </div>

      <div class="col-span-8">
        <p class="text-2xl cursor-pointer" @click="toggle(index)">
          {{ item.q }}
        </p>

        <transition name="accordion">
          <div
              v-show="activeIndex === index"
              class="answer-wrapper"
          >
            <p class="mt-8 max-w-[60%]">
              {{ item.a }}
            </p>
          </div>
        </transition>
      </div>

      <div class="col-span-2 justify-self-end">
        <Button
            size="small"
            :icon="activeIndex === index ? 'pi pi-minus' : 'pi pi-plus'"
            @click="toggle(index)"
        />
      </div>
    </div>
  </BlockSection>
</template>
<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.15s ease, opacity 0.15s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* достаточно большое значение */
  opacity: 1;
}

.answer-wrapper {
  overflow: hidden;
}

</style>