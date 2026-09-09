import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('tosin111');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('100');
  await page.getByText('From account # 1534215453 to').click();
  await page.locator('#toAccountId').selectOption('15453');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toBeVisible();
});