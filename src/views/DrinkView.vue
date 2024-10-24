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
      <!-- TODO: break out into child component and use custom events -->
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

<style scoped>
/* TODO: use space and size reference system and switch to REM for text; */

.page-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: var(--gap-large);
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.drink-display-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.drink-options-panel {
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    align-items: center;
  }
}
.drink-options-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 550px;
  gap: var(--gap-small);
  @media (max-width: 600px) {
    justify-content: center;
  }
}
.drink-option {
  display: inline-block;
  cursor: pointer;
  border-radius: var(--border-radius);
  border: 2px solid var(--color-border);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 2px 16px;
  height: 45px;
  width: 120px;
  color: var(--color-text-dark);
  background-color: var(--color-background);
}
.drink-option:hover {
  background-color: var(--color-background-darken);
}
.selected-drink-option {
  /* TODO: see if they have 'darken() methods to use here' */
  background-color: var(--color-background-darken);
}
</style>
