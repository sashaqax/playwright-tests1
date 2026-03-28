import { Page, Locator } from '@playwright/test'

export class GaragePage {
  readonly page: Page
  readonly heading: Locator
  readonly addCarButton: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = page.locator('h1')
    this.addCarButton = page.locator('#addCarBtn, button:has-text("Add car")')
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space/panel/garage')
  }

  async isOpen(): Promise<boolean> {
    return this.page.url().includes('/garage')
  }
}