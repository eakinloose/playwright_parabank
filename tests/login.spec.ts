import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { users } from '../data/testData';


test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/'
    );
  });

  test('User should login successfully with valid credentials', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
    await loginPage.checkLoginSuccessVisibility();
  });


  test('User should not login with invalid username', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.invalidUser.username,
      users.validUser.password
    );
  });


  test('User should not login with invalid password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.validUser.username,
      users.invalidUser.password
    );
  });


  test('User should not login with invalid username and password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );
  });


  test('User should not login with empty username', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      '',
      users.validUser.password
    );
  });


  test('User should not login with empty password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.validUser.username,
      ''
    );
  });


  test('User should not login with empty username and password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      '',
      ''
    );
  });

});