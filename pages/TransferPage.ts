import { Page, Locator } from '@playwright/test';

export class TransferFundsPage {
  readonly page: Page;

  readonly transferFundsLink: Locator;
  readonly amountInput: Locator;
  readonly fromAccount: Locator;
  readonly toAccount: Locator;
  readonly transferButton: Locator;
  readonly transferCompleteHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.transferFundsLink = page.getByRole('link', {
      name: 'Transfer Funds',
    });

    this.amountInput = page.locator('#amount');

    this.fromAccount = page.getByText(
      'From account # 153421 to'
    );

    this.toAccount = page.locator('#toAccountId');

    this.transferButton = page.getByRole('button', {
      name: 'Transfer',
    });

    this.transferCompleteHeading = page.getByRole('heading', {
      name: 'Transfer Complete!',
    });
  }

  async navigateToTransferFunds() {
    await this.transferFundsLink.click();
  }

  async enterAmount(amount: string) {
    await this.amountInput.fill(amount);
  }

  async selectFromAccount() {
    await this.fromAccount.click();
  }

  async selectToAccount(accountId: string) {
    await this.toAccount.selectOption(accountId);
  }

  async clickTransferButton() {
    await this.transferButton.click();
  }

  async isTransferComplete() {
    await this.transferCompleteHeading.waitFor({
      state: 'visible',
    });
  }
}