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
  if (drinkPart.name === 'milk foam') {
    partClasses += ' foam-topping'
  }
  return partClasses
}
</script>

<template>
  <div class="drink-container">
    <div class="glass glass-border"></div>
    <div class="glass internal-glass"></div>
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

<style>
/* TODO: see if there is a way to make CSS variables scope to a style sheet without using root */
:root {
  --drink-width: 350px;
}
.drink-container {
  position: relative;
  width: var(--drink-width);
}
.glass {
  position: absolute;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
}
.glass-border {
  border-top: var(--drink-width) solid var(--color-accent-border);
  width: var(--drink-width);
}
.internal-glass {
  --internal-glass-width: 336px;
  z-index: 2;
  top: 3px;
  left: 4px;
  border-top: var(--internal-glass-width) solid var(--color-background);
  width: var(--internal-glass-width);
}
.part-container {
  z-index: 3;
  position: relative;
  top: 25px;
  left: 66px;
  :last-child {
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    border-bottom: 2px solid var(--color-accent-border);
  }
}
.drink-part {
  height: 50px;
  width: 212px;
  text-align: center;
}
.drink-part-border {
  border-left: 2px solid var(--color-accent-border);
  border-right: 2px solid var(--color-accent-border);
}

.foam-topping {
  --mask: radial-gradient(21.47px at 50% 29px, #000 99%, #0000 101%)
      calc(50% - 20px) 0/40px 100%,
    radial-gradient(21.47px at 50% -19px, #0000 99%, #000 101%) 50% 10px/40px
      100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
}
</style>

<!-- CSS Waves  -->
<!-- I love the CSSTricks website, and they have a blogpost for making
wave patterns: https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/
by Temani Afif. They also have a wave generator tool, which I used:
https://css-generators.com/wavy-shapes/  -->
