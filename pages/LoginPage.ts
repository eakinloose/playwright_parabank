import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly accountsOverviewHeading: Locator;

  constructor(private readonly page: Page) {
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');

    this.loginButton = page.getByRole('button', {
      name: 'Log In',
    });

    this.accountsOverviewHeading = page.getByRole('heading', {
      name: 'Accounts Overview',
    });
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async checkLoginSuccessVisibility() {
    await expect(this.accountsOverviewHeading).toBeVisible();
  }
}