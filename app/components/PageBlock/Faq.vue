<script setup lang="ts">
import { ref } from 'vue'

const items = [
  {
    q: 'Какие задачи можно решить с помощью лазерных технологий?',
    a: 'Лазерные технологии позволяют устранять износ, эрозию, задиры, абразивное и ударное повреждение, восстанавливать геометрию деталей, повышать их износостойкость и срок службы.'
  },
  {
    q: 'Можно ли восстановить деталь вместо ее замены?',
    a: 'В большинстве случаев - да. Лазерная наплавка и термоупрочнение позволяют восстановить\n' +
        'деталь до исходных размеров и характеристик, что значительно дешевле и быстрее, чем\n' +
        'изготовление новой.'
  },
  {
    q: 'Какие преимущества у лазерной наплавки?',
    a: 'Точная дозировка энергии, минимальная деформация детали, высокая повторяемость,\n' +
        'возможность локальной обработки, высокая прочность и однородность наплавленного слоя.'
  },
  {
    q: 'Какие материалы можно наплавлять?',
    a: 'Мы работаем с углеродистыми и легированными сталями, нержавеющими сталями, никелевыми,\n' +
        'кобальтовыми сплавами, а также материалами с карбидами.'
  },
  {
    q: 'Для каких деталей применяется лазерное термоупрочнение?',
    a: 'Метод применяется для валов, резьб, шестерен, направляющих, рабочих поверхностей,\n' +
        'подверженных износу.'
  },
  {
    q: 'Какой может быть толщина наплавленного слоя?',
    a: 'Как правило, от 0,5 до 5 мм за один или несколько проходов в зависимости от задачи и\n' +
        'материала.'
  }
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
        class="grid grid-cols-12 pb-6 border-b border-[#E0E0E0] mb-6 items-start"
    >
      <div class="col-span-2">
        <p>0{{ index + 1 }}</p>
      </div>

      <div class="col-span-8">
        <p class="text-xl cursor-pointer" @click="toggle(index)">
          {{ item.q }}
        </p>

        <transition name="accordion">
          <div
              v-show="activeIndex === index"
              class="answer-wrapper"
          >
            <p class="mt-8 max-w-[80%]">
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