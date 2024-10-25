import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import * as client from '../../client'
import DrinkView from '../../views/DrinkView.vue'
import { GET_DRINK_RECIPES_RESPONSE } from '@/utility/constants'

describe('Drink View', () => {
  beforeEach(() => {
    vi.spyOn(client, 'getDrinkRecipes').mockResolvedValue(
      GET_DRINK_RECIPES_RESPONSE,
    )
  })
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders properly', () => {
    const wrapper = mount(DrinkView)
    expect(wrapper.text()).toContain('Espresso What')
  })

  it('displays loading screen then drinks after successful getDrinkRecipes response', async () => {
    const wrapper = mount(DrinkView)
    expect(wrapper.text()).toContain('loading')
    expect(wrapper.text()).not.toContain('Macchiato')
    await flushPromises()
    expect(wrapper.text()).toContain('Macchiato')
    expect(wrapper.text()).not.toContain('loading')
  })

  // TODO: check that failure response shows default latte drink

  // TODO: test that clicking drink name option changes drink display
})
