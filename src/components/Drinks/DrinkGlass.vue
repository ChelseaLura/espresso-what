<script setup lang="ts">
import { LATTE_DRINK_DISPLAY } from '@/utility/constants'
import type { DrinkDisplay, DrinkPart } from '@/utility/types'

interface DrinkGlassProps {
  selectedDrink: DrinkDisplay
}

const { selectedDrink = LATTE_DRINK_DISPLAY } = defineProps<DrinkGlassProps>()

function drinkPartClassGenerator(drinkPart: DrinkPart): string {
  let partClasses = 'drink-part'
  if (drinkPart.name !== '') {
    partClasses += ' drink-part-border'
  }
  return partClasses
}
</script>

<template>
  <div class="drink-container">
    <div class="glass"></div>
    <div class="internal-glass"></div>
    <div class="part-container">
      <div
        v-for="(drinkPart, index) in selectedDrink.drinkParts"
        v-bind:key="index"
        :class="drinkPartClassGenerator(drinkPart)"
        :style="{
          'background-color': drinkPart.color,
          color: drinkPart.textColor,
        }"
      >
        {{ drinkPart.name }}
      </div>
    </div>
  </div>
</template>
