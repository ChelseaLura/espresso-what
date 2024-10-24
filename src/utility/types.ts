// Note:
// I like to seperate all my interfaces, types, enums etc into a seperate file
// to avoid possible circular dependendies.

export type Portion = 1 | 2 | 3 | 4 | 5 | 6
export enum Ingredient {
  ESPRESSO = 'espresso',
  MILK = 'steamed milk',
  FOAM = 'milk foam',
  WATER = 'water',
  COFFEE = 'drip-coffee',
  WHIP_CREAM = 'whipped-cream',
}

export interface IngredientFormula {
  portion: Portion
  name: Ingredient
  order: number
}

export interface DrinkRecipe {
  id: string
  name: string
  ingredients: Array<IngredientFormula>
  funFact?: string
}

export interface DrinkPart {
  color: string
  name: string
  textColor: string
}

export interface DrinkDisplay {
  id: string
  name: string
  drinkParts: Array<DrinkPart>
  funFact?: string
}
