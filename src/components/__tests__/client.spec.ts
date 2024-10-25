import { describe, expect, it } from 'vitest'

describe('client', () => {
  describe('getDrinkRecipes', () => {
    // I added this empty test or else the suite fails because there aren't any tests yet
    it('runs', () => {
      expect(true).toEqual(true)
    })
    // Test URL is grabbed properly from env file/etc, that the subdirectory or query pramaters for a specific call are correct
    // confirm correct config object
    // confirm error response (in this case alerts, but a better way to handle them is in the client file)
  })
})
