<script setup lang="ts">
import { ref } from 'vue'

type Portion = 1 | 2 | 3 | 4 | 5 | 6
enum Ingredient {
  ESPRESSO = 'espresso',
  MILK = 'steamed milk',
  FOAM = 'milk foam',
  WATER = 'water',
  COFFEE = 'drip-coffee',
}
const IngredientColors: Record<Ingredient, string> = {
  espresso: '#361A07',
  'steamed milk': '#FFF9F3',
  'milk foam': '#FFF9F3',
  water: '#C5F1F5',
  'drip-coffee': '#120902',
}
const IngredientTextColors: Record<Ingredient, string> = {
  espresso: '#FFF9F3',
  'steamed milk': '#361A07',
  'milk foam': '#361A07',
  water: '#361A07',
  'drip-coffee': '#FFF9F3',
}

interface IngredientFormula {
  portion: Portion
  name: Ingredient
  order: number
}
interface DrinkRecipe {
  id: string
  name: string
  ingredients: Array<IngredientFormula>
  funFact?: string
}
interface DrinkPart {
  color: string
  name: string
  textColor: string
}

const drinks: Array<DrinkRecipe> = [
  {
    id: '2b8bbfd9-cfa1-4550-a50f-da08b265262f',
    name: 'latte',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 3,
        order: 2,
      },
    ],
  },
  {
    id: '7ed6dbc1-bf28-4350-8e80-97d7097b9d0f',
    name: 'cappucino',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 2,
        order: 2,
      },
      {
        name: Ingredient.FOAM,
        portion: 1,
        order: 3,
      },
    ],
  },
  {
    id: '21407e24-c394-423c-80e9-348b8325979a',
    name: 'macchiato',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.FOAM,
        portion: 1,
        order: 2,
      },
    ],
  },
  {
    id: '62d9136d-c831-4abf-9f6c-271c3f4c67f8',
    name: 'americano',
    ingredients: [
      {
        name: Ingredient.WATER,
        portion: 4,
        order: 1,
      },
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 2,
      },
    ],
  },
  {
    id: '8819c873-c7ae-40fe-9830-a4c95f888079',
    name: 'espresso',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
    ],
  },
  {
    id: '2a51fe9d-7339-421b-8922-da9515c4e95c',
    name: 'cortado',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 2,
        order: 2,
      },
    ],
  },
  {
    id: 'a361676f-0fd7-4723-9a44-d4c9e86e0672',
    name: 'cafe au lait',
    ingredients: [
      {
        name: Ingredient.COFFEE,
        portion: 5,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 1,
        order: 2,
      },
    ],
  },
  {
    id: '092876bd-b1e2-421e-b145-571f05fcb8d0',
    name: 'red eye',
    ingredients: [
      {
        name: Ingredient.COFFEE,
        portion: 4,
        order: 1,
      },
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 2,
      },
    ],
  },
]

function drinkPartClassGenerator(drinkPart: DrinkPart): string {
  let partClasses = 'drink-part'
  if (drinkPart.name !== '') {
    partClasses += ' drink-part-border'
  }
  return partClasses
}

function createDrinkDisplay(
  drinks: Array<DrinkRecipe>,
): Record<string, Array<DrinkPart>> {
  const drinkDisplays: Record<string, Array<DrinkPart>> = {}
  drinks.forEach(drink => {
    const drinkParts: Array<DrinkPart> = []
    // TODO: Add more logic to make sure drink cannot be more than 6 parts
    drink.ingredients.forEach(ingredient => {
      for (let i = 1; i <= ingredient.portion; i++) {
        drinkParts.push({
          name: ingredient.name,
          color: IngredientColors[ingredient.name],
          textColor: IngredientTextColors[ingredient.name],
        })
      }
    })
    console.log(drinkParts.length)
    if (drinkParts.length > 6) {
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
    drinkDisplays[drink.name] = drinkParts.reverse()
  })
  return drinkDisplays
}

function setDrinkDisplay(drinkName: string) {
  console.log('clicked with: ', drinkName)
  selectedDrink.value = drinkDisplays[drinkName]
}

const drinkDisplays = createDrinkDisplay(drinks)
console.log(drinkDisplays)
const selectedDrink = ref(drinkDisplays['cappucino'])
</script>

<template>
  <h1>Espresso What???</h1>
  <div class="page-container">
    <div class="drink-container">
      <div class="glass"></div>
      <div class="internal-glass"></div>
      <div class="part-container">
        <div
          v-for="(drinkPart, index) in selectedDrink"
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
    <div class="drink-options-panel">
      <p>drink options</p>
      <div class="drink-options-container">
        <button
          v-for="drink in drinks"
          :key="drink.id"
          class="drink-option"
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
h1 {
  color: #120902;
  margin-bottom: 50px;
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
  gap: 20px;
}
.drink-container {
  position: relative;
  width: 400px;
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
  height: 38px;
  min-width: 96px;
  min-height: 38px;
  color: #120902;
  background-color: var(--color-background);
}
.drink-option:hover {
  background-color: #efd9a9;
}
.drink-options-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
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
