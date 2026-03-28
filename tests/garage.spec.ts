import { test, expect } from '../utils/fixtures'

test.describe('Garage page', () => {

  test('should open garage page with userGaragePage fixture', async ({ userGaragePage }) => {
    expect(await userGaragePage.isOpen()).toBeTruthy()
  })

  test('should display Add car button on garage page', async ({ userGaragePage }) => {
    await expect(userGaragePage.addCarButton).toBeVisible()
  })

})