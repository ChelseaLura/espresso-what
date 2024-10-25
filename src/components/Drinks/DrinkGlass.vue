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
        v-for="(drinkPart, index) in selectedDrink?.drinkParts"
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
/* TODO: Look into issues with absolute positioned styles using 'scoped'*/
:root {
  --drink-size: 350px;
  --drink-size-mobile: 260px;
}
.drink-container {
  position: relative;
  width: var(--drink-size);
  height: var(--drink-size);
  @media (max-width: 600px) {
    height: var(--drink-size-mobile);
    width: var(--drink-size-mobile);
  }
}
.glass {
  position: absolute;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
}
.glass-border {
  border-top: var(--drink-size) solid var(--color-accent-border);
  width: var(--drink-size);
  @media (max-width: 600px) {
    border-top: var(--drink-size-mobile) solid var(--color-accent-border);
    width: var(--drink-size-mobile);
  }
}
.internal-glass {
  --internal-glass-width: 342px;
  z-index: 2;
  top: 3px;
  left: 4px;
  border-top: var(--internal-glass-width) solid var(--color-background);
  width: var(--internal-glass-width);
  @media (max-width: 600px) {
    --internal-glass-width-mobile: 252px;
    border-top: var(--internal-glass-width-mobile) solid var(--color-background);
    width: var(--internal-glass-width-mobile);
  }
}
.part-container {
  z-index: 3;
  position: relative;
  top: 22px;
  left: 63px;
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 2px solid var(--color-accent-border);
  }
  @media (max-width: 600px) {
    top: 12px;
    left: 58px;
  }
}
.drink-part {
  height: 52px;
  width: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 39px;
    width: 145px;
  }
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

<!-- Notes -->

<!-- Design inspiration: -->
<!-- The drink image was heavily inspired by the design found on this blog post
https://blog.mistobox.com/espresso-coffee-drinks/ by Tyler Schultz. 
The artist for the image itself was unlisted.  -->

<!-- CSS Waves  -->
<!-- I love the CSSTricks website, and they have a blogpost for making
wave patterns: https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/
by Temani Afif. They also have a wave generator tool, which I used:
https://css-generators.com/wavy-shapes/  -->
