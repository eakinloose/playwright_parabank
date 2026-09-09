import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly registerLink: Locator;

  constructor(private readonly page: Page) {
    this.registerLink = page.getByRole('link', {
      name: 'Register',
    });
  }

  async visitUrl() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/index.htm'
    );
  }

  async clickRegister() {
    await this.registerLink.click();
  }
}