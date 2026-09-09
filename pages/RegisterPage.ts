import { Page, Locator, expect } from '@playwright/test';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
}

export class RegisterPage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly street: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phoneNumber: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly repeatedPassword: Locator;
  readonly registerButton: Locator;
  readonly accountServicesHeading: Locator;

  constructor(private readonly page: Page) {
    this.firstName = page.locator('#customer\\.firstName');
    this.lastName = page.locator('#customer\\.lastName');
    this.street = page.locator('#customer\\.address\\.street');
    this.city = page.locator('#customer\\.address\\.city');
    this.state = page.locator('#customer\\.address\\.state');
    this.zipCode = page.locator('#customer\\.address\\.zipCode');
    this.phoneNumber = page.locator('#customer\\.phoneNumber');
    this.ssn = page.locator('#customer\\.ssn');
    this.username = page.locator('#customer\\.username');
    this.password = page.locator('#customer\\.password');
    this.repeatedPassword = page.locator('#repeatedPassword');

    this.registerButton = page.getByRole('button', {
      name: 'Register',
    });
      this.accountServicesHeading = page.getByRole('heading', {
      name: 'Account Services',
    });
  }

  async fillRegistrationForm(data: RegistrationData) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.street.fill(data.street);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.zipCode.fill(data.zipCode);
    await this.phoneNumber.fill(data.phoneNumber);
    await this.ssn.fill(data.ssn);
    await this.username.fill(data.username);
    await this.password.fill(data.password);
    await this.repeatedPassword.fill(data.password);
  }

  async register() {
    await this.registerButton.click();
  }

  async checkRegistrationSuccessVisibility() {
    await expect(this.accountServicesHeading).toBeVisible();
  }
}