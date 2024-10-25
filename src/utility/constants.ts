import { Ingredient, type DrinkDisplay, type DrinkRecipe } from './types'

// TODO: research if there is a way to have color varaibles
//   accessibile in both css and js files in Vue?
// MY guess is no, and you'd need a seperate theming system which could generate
//   the CSS variables as a app build step asnd have those same variables accessible for scripting files.
// So I'm doing this not great practice to at least have it consisten in code somewhere.
const ESPRESSO_BROWN = '#361A07'
const MILKY_WHITE = '#FFF9F3'
const WATER_BLUE = '#C5F1F5'
const COFFEE_BROWN = '#120902'
const GRAPPA_HONEY = '#E9C465'

export const INGREDIENT_COLORS: Record<Ingredient, string> = {
  espresso: ESPRESSO_BROWN,
  'steamed milk': MILKY_WHITE,
  'milk foam': MILKY_WHITE,
  water: WATER_BLUE,
  'drip-coffee': COFFEE_BROWN,
  'whipped-cream': MILKY_WHITE,
  grappa: GRAPPA_HONEY,
}

// TODO: contrast testing
export const INGREDIENT_TEXT_COLORS: Record<Ingredient, string> = {
  espresso: MILKY_WHITE,
  'steamed milk': ESPRESSO_BROWN,
  'milk foam': ESPRESSO_BROWN,
  water: ESPRESSO_BROWN,
  'drip-coffee': MILKY_WHITE,
  'whipped-cream': ESPRESSO_BROWN,
  grappa: ESPRESSO_BROWN,
}

export const LATTE_DRINK_DISPLAY: DrinkDisplay = {
  id: '2b8bbfd9-cfa1-4550-a50f-da08b265262f',
  name: 'Latte',
  drinkParts: [
    {
      color: '',
      name: '',
      textColor: '',
    },
    {
      color: MILKY_WHITE,
      name: 'steamed milk',
      textColor: ESPRESSO_BROWN,
    },
    {
      color: MILKY_WHITE,
      name: 'steamed milk',
      textColor: ESPRESSO_BROWN,
    },
    {
      color: MILKY_WHITE,
      name: 'steamed milk',
      textColor: ESPRESSO_BROWN,
    },
    {
      color: ESPRESSO_BROWN,
      name: 'espresso',
      textColor: MILKY_WHITE,
    },
    {
      color: ESPRESSO_BROWN,
      name: 'espresso',
      textColor: MILKY_WHITE,
    },
  ],
}

export const DEFAULT_DRINK_DISPLAYS: Record<string, DrinkDisplay> = {
  Latte: LATTE_DRINK_DISPLAY,
}

export const DEFAULT_RECIPES: Array<DrinkRecipe> = [
  {
    id: '2b8bbfd9-cfa1-4550-a50f-da08b265262f',
    name: 'Latte',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 4,
        order: 2,
      },
    ],
  },
]

export const GET_DRINK_RECIPES_RESPONSE: Array<DrinkRecipe> = [
  {
    id: '2b8bbfd9-cfa1-4550-a50f-da08b265262f',
    name: 'Latte',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.MILK,
        portion: 4,
        order: 2,
      },
    ],
  },
  {
    id: '7ed6dbc1-bf28-4350-8e80-97d7097b9d0f',
    name: 'Cappucino',
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
    name: 'Macchiato',
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
    name: 'Americano',
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
    name: 'Espresso',
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
    name: 'Cortado',
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
    name: 'Cafe Au Lait',
    ingredients: [
      {
        name: Ingredient.COFFEE,
        portion: 3,
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
    id: '092876bd-b1e2-421e-b145-571f05fcb8d0',
    name: 'Red Eye',
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
  {
    id: '2a55f20c-8a7e-482c-a11c-6b5a28c9c007',
    name: 'Espresso Con Panna',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.WHIP_CREAM,
        portion: 2,
        order: 2,
      },
    ],
  },
  {
    id: '5212a4c2-fde4-40ef-a4a1-dcc2a777661f',
    name: 'Cafe Hafuch',
    ingredients: [
      {
        name: Ingredient.MILK,
        portion: 2,
        order: 1,
      },
      {
        name: Ingredient.ESPRESSO,
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
    id: '6fba3836-486d-4f14-86ee-af9e0927371b',
    name: 'Flat White',
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
    id: '4e147628-554e-49a2-bdbc-f69b9bd6bd28',
    name: 'Caffè Corretto',
    ingredients: [
      {
        name: Ingredient.ESPRESSO,
        portion: 1,
        order: 1,
      },
      {
        name: Ingredient.GRAPPA,
        portion: 1,
        order: 2,
      },
    ],
  },
]
