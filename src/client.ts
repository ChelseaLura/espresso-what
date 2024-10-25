// This should be grabbed from an ENV file not hard coded
// This allows us to grab different dev, stage urls for w/e envrionment our app is running in

import { GET_DRINK_RECIPES_RESPONSE } from './utility/constants'
import type { DrinkRecipe } from './utility/types'

const ERROR_MESSAGE =
  'Oh no! We are having trouble grabbing more drink recipes. Please try refreshing the page or reaching out for support'

// I did think it would be easier to have a real endpoint to hit, so I used this JSONPLaceholder one
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const config = {
  method: 'GET',
  headers: {
    //these are some example headers:
    // token should also be grabbed from eiother an ENV for an on-build generated file where the value is stored within a github secret or aws secrets file etc
    // Authorization: `Bearer ${token}`
    // 'Content-Type': 'application/json'
  },
}

export const getDrinkRecipes = async (): Promise<
  Array<DrinkRecipe> | undefined
> => {
  try {
    const response = await fetch(BASE_URL, config)
    if (response.ok) {
      // normally this is where we'd grab a json value from the response but to make things simpler I am just returning our static recipe data
      return GET_DRINK_RECIPES_RESPONSE
    } else {
      console.log(new Error(`getDrinkRecipes failed with: ${response.status}`))
      alert(ERROR_MESSAGE)
    }
  } catch (error) {
    console.log(error)
    alert(ERROR_MESSAGE)
  }
}

// ERROR Handling
// Ideally this would NOT just be me writing console logs like I am above, but instead having a much more thurough response.
// For starters we should log something, but not to the console but to a logging service with appropraite data added (method, error, user/segment data if applicable)
//
// Also we could change up the structure and make it return a promise.reject here, so whatever uses this method can handle how to display the error for that component etc.
//
// // I also don't think it should be the client's responsibility to call alert here. I meerely added it here to make writing failure tests a bit easier.
// I would prefer that it sends a event a store etc, which then can handle events for the app as a holeThen events can be handled more holistically,
//   and they can also make it easier to handle a large influx of errors, only show so many, handle when users close them etc.
