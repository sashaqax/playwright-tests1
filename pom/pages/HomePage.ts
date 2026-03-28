import { Page, Locator } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly signUpButton: Locator

  constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('.header_signin')
    this.signUpButton = page.locator('button.btn-primary')
  }

  async open() {
  await this.page.goto('https://qauto.forstudy.space/')
}
}