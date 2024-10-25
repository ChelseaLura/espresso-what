<script setup lang="ts">
import { getDrinkRecipes } from '@/client'
import DrinkGlass from '@/components/Drinks/DrinkGlass.vue'
import { translateRecipesToDrinkDisplay } from '@/components/Drinks/drinkUtilityMethods'
import {
  DEFAULT_DRINK_DISPLAYS,
  DEFAULT_RECIPES,
  LATTE_DRINK_DISPLAY,
} from '@/utility/constants'
import type { DrinkDisplay, DrinkRecipe } from '@/utility/types'
import { ref, onMounted, type Ref } from 'vue'

const selectedDrink: Ref<DrinkDisplay> = ref(LATTE_DRINK_DISPLAY)
const recipes: Ref<Array<DrinkRecipe>> = ref(DEFAULT_RECIPES)
const drinkDisplays: Ref<Record<string, DrinkDisplay>> = ref(
  DEFAULT_DRINK_DISPLAYS,
)
const isLoading = ref(true)

onMounted(async () => {
  const drinkRecipeResponse = await getDrinkRecipes()
  if (drinkRecipeResponse) {
    recipes.value = drinkRecipeResponse
    drinkDisplays.value = translateRecipesToDrinkDisplay(recipes.value)
  }
  isLoading.value = false
})

function setDrinkDisplay(drinkName: string) {
  if (drinkDisplays.value) {
    selectedDrink.value = drinkDisplays.value[drinkName]
  }
}
</script>

<template>
  <!-- TODO: add aria tags and go over accessiibility -->
  <h1>Espresso What???</h1>
  <div v-if="isLoading" class="page-container loading">
    <p>loading...</p>
  </div>
  <div v-else class="page-container">
    <div class="drink-display-container">
      <h3>{{ selectedDrink?.name }}</h3>
      <DrinkGlass :selected-drink="selectedDrink" />
    </div>
    <div class="drink-options-panel">
      <p>Cafe Drink Options</p>
      <!-- TODO: break out into child component and use custom events -->
      <div class="drink-options-container">
        <!-- TODO: read more on conditional styling https://vuejs.org/guide/essentials/class-and-style.html -->
        <button
          v-for="drink in recipes"
          :key="drink.id"
          :class="[
            drink.name === selectedDrink?.name ? 'selected-drink-option' : '',
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
.loading {
  align-items: center;
}
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
