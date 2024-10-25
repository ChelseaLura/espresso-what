import { describe, expect, it } from 'vitest'
import { translateRecipesToDrinkDisplay } from '../Drinks/drinkUtilityMethods'
import {
  TEST_DRINK_DISPLAY,
  TEST_GET_DRINK_RECIPES_RESPONSE,
} from './testConstants'

describe('drink Utility Methods', () => {
  describe('translateRecipesToDrinkDisplay', () => {
    it('happy path', () => {
      expect(
        translateRecipesToDrinkDisplay(TEST_GET_DRINK_RECIPES_RESPONSE),
      ).toEqual(TEST_DRINK_DISPLAY)
    })
  })

  // TODO: Test and improve method:
  //  - empty test
  //  - recipe with too many ingredients
  //  - recipe with 'empty' slots
})
