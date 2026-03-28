import { test as setup } from '@playwright/test'
import { HomePage } from '../../pom/pages/HomePage'
import { SignInForm } from '../../pom/forms/SignInForm'
import { VALID_USER } from '../../test-data/users'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ page }) => {
  const homePage = new HomePage(page)
  const signInForm = new SignInForm(page)

  await homePage.open()
  await homePage.signInButton.click()
  await signInForm.login(VALID_USER.email, VALID_USER.password)

  await page.waitForURL('**/garage')
  await page.context().storageState({ path: authFile })
})