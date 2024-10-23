import { type DrinkRecipe, Ingredient } from '@/utility/types'

export const test_drink_recipes: Array<DrinkRecipe> = [
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
        portion: 3,
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
]
