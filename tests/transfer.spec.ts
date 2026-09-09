import { test } from '@playwright/test';

import { users } from '../data/testData';
import { LoginPage } from '../pages/loginPage';
import { TransferFundsPage } from '../pages/TransferPage';
import { HomePage } from '../pages/HomePage';

test('User should be able to register successfully', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)
    const transferPage = new TransferFundsPage(page)

  await homePage.visitUrl();
  await loginPage.login(users.validUser.username, users.validUser.password)
  await transferPage.navigateToTransferFunds()
  await transferPage.enterAmount("100")
  await transferPage.selectFromAccount()
  await transferPage.selectToAccount("15453")
  await transferPage.clickTransferButton()
  await transferPage.isTransferComplete()
});