import { Ingredient, type DrinkDisplay } from './types'

// TODO: research if there is a way to have color varaibles
//   accessibile in both css and js files in Vue?
// MY guess is no, and you'd need a seperate theming system which could generate
//   the CSS variables as a app build step asnd have those same variables accessible for scripting files.
// So I'm doing this not great practice to at least have it consisten in code somewhere.
const ESPRESSO_BROWN = '#361A07'
const MILKY_WHITE = '#FFF9F3'
const WATER_BLUE = '#C5F1F5'
const COFFEE_BROWN = '#120902'

export const INGREDIENT_COLORS: Record<Ingredient, string> = {
  espresso: ESPRESSO_BROWN,
  'steamed milk': MILKY_WHITE,
  'milk foam': MILKY_WHITE,
  water: WATER_BLUE,
  'drip-coffee': COFFEE_BROWN,
}

// TODO: contrast testing
export const INGREDIENT_TEXT_COLORS: Record<Ingredient, string> = {
  espresso: MILKY_WHITE,
  'steamed milk': ESPRESSO_BROWN,
  'milk foam': ESPRESSO_BROWN,
  water: ESPRESSO_BROWN,
  'drip-coffee': MILKY_WHITE,
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
