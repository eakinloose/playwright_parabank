import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { users } from '../data/testData';

test('User should be able to register successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.visitUrl();
  await homePage.clickRegister();

  await registerPage.fillRegistrationForm({
    firstName: users.validUser.firstName,
    lastName: users.validUser.lastName,
    street: users.validUser.street,
    city: users.validUser.city,
    state: users.validUser.state,
    zipCode: users.validUser.zipCode,
    phoneNumber: users.validUser.phoneNumber,
    ssn: users.validUser.ssn,
    username: users.validUser.username,
    password: users.validUser.password,
  });

  await registerPage.register();
  await registerPage.checkRegistrationSuccessVisibility()
});