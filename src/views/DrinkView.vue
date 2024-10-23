<script setup lang="ts">
import DrinkGlass from '@/components/Drinks/DrinkGlass.vue'
import { INGREDIENT_COLORS, INGREDIENT_TEXT_COLORS } from '@/utility/constants'
import { test_drink_recipes } from '@/utility/testData'
import {
  type DrinkRecipe,
  type DrinkPart,
  type DrinkDisplay,
} from '@/utility/types'

import { ref } from 'vue'

function createDrinkDisplay(
  drinks: Array<DrinkRecipe>,
): Record<string, DrinkDisplay> {
  const drinkDisplays: Record<string, DrinkDisplay> = {}
  drinks.forEach(drink => {
    const drinkParts: Array<DrinkPart> = []
    // TODO: Add more logic to make sure drink cannot be more than 6 parts
    drink.ingredients.forEach(ingredient => {
      for (let i = 1; i <= ingredient.portion; i++) {
        drinkParts.push({
          name: ingredient.name,
          color: INGREDIENT_COLORS[ingredient.name],
          textColor: INGREDIENT_TEXT_COLORS[ingredient.name],
        })
      }
    })
    if (drinkParts.length > 6) {
      // TODO: real error handling
      throw new Error('too many ingredients')
    }
    if (drinkParts.length < 6) {
      for (let i = drinkParts.length; i < 6; i++) {
        drinkParts.push({
          name: '',
          color: 'transparent',
          textColor: 'transparent',
        })
      }
    }
    drinkDisplays[drink.name] = {
      id: drink.id,
      name: drink.name,
      drinkParts: drinkParts.reverse(),
      funFact: drink.funFact ? drink.funFact : '',
    }
  })
  return drinkDisplays
}

function setDrinkDisplay(drinkName: string) {
  selectedDrink.value = drinkDisplays[drinkName]
}

const drinkDisplays = createDrinkDisplay(test_drink_recipes)
const selectedDrink = ref(drinkDisplays['Latte'])
</script>

<template>
  <!-- TODO: add aria tags and go over accessiibility -->
  <h1>Espresso What???</h1>
  <div class="page-container">
    <div class="drink-display-container">
      <h3>{{ selectedDrink.name }}</h3>
      <DrinkGlass :selected-drink="selectedDrink" />
    </div>
    <div class="drink-options-panel">
      <p>Cafe Drink Options</p>
      <div class="drink-options-container">
        <!-- TODO: read more on conditional styling https://vuejs.org/guide/essentials/class-and-style.html -->
        <button
          v-for="drink in test_drink_recipes"
          :key="drink.id"
          :class="[
            drink.name === selectedDrink.name ? 'selected-drink-option' : '',
            'drink-option',
          ]"
          type="button"
          @click="setDrinkDisplay(drink.name)"
        >
          {{ drink.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
/* TODO: use space and size reference system and switch to REM for text; */

h1 {
  color: #120902;
  margin-bottom: 50px;
}
h3 {
  font-size: 20px;
  font-weight: 600;
  color: #361a07;
  margin-bottom: 20px;
  text-align: center;
}
p {
  font-size: 18px;
  font-weight: 600;
  color: #361a07;
  margin-bottom: 10px;
}
.page-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 50px;
}
.drink-container {
  position: relative;
  width: 350px;
}
.glass {
  /* TODO: Add variables for sizing, extract out similar styles */
  position: absolute;
  border-top: 350px solid #2a5c59;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 350px;
}
.internal-glass {
  position: absolute;
  z-index: 2;
  top: 3px;
  left: 4px;

  border-top: 336px solid var(--color-background);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 336px;
}
.part-container {
  z-index: 3;
  position: relative;
  top: 25px;
  left: 66px;
  :last-child {
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    border-bottom: 2px solid #2a5c59;
  }
}
.drink-part {
  height: 50px;
  width: 212px;
  text-align: center;
}
.drink-part-border {
  border-left: 2px solid #2a5c59;
  border-right: 2px solid #2a5c59;
}
.drink-option {
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #0a0501;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  height: 40px;
  width: 120px;
  color: #120902;
  background-color: var(--color-background);
}
.drink-option:hover {
  background-color: #efd9a9;
}
.selected-drink-option {
  /* TODO: see if they have 'darken() methods to use here' */
  background-color: #efd9a9;
}
.drink-options-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 550px;
  gap: 10px;
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
