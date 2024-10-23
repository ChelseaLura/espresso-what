<script setup lang="ts">
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
        })
      }
    }
    drinkDisplays[drink.name] = drinkParts.reverse()
  })
  return drinkDisplays
}
const drinkDisplays = createDrinkDisplay(drinks)
console.log(drinkDisplays)
const selectedDrink: Array<DrinkPart> = drinkDisplays['cappucino']
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
          :style="{ 'background-color': drinkPart.color }"
        >
          {{ drinkPart.name }}
        </div>
      </div>
    </div>
    <div>
      <p>drink options</p>
      <div v-for="drink of drinks" v-bind:key="drink.id">
        <button>{{ drink.name }}</button>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  color: #120902;
  margin-bottom: 50px;
}
.page-container {
  display: flex;
  width: 100%;
  flex-direction: row;
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
}
.drink-part-border {
  border-left: 2px solid #2a5c59;
  border-right: 2px solid #2a5c59;
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
