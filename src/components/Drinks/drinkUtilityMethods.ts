import { INGREDIENT_COLORS, INGREDIENT_TEXT_COLORS } from '@/utility/constants'
import type { DrinkRecipe, DrinkDisplay, DrinkPart } from '@/utility/types'

export const translateRecipesToDrinkDisplay = (
  drinks: Array<DrinkRecipe> | undefined,
): Record<string, DrinkDisplay> => {
  if (!drinks) {
    return {}
  }
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
