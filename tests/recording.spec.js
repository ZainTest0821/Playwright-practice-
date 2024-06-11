import { test, expect, browser } from '@playwright/test';

test('This is my new recording file check', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Databeys');
  await page.getByRole('link', { name: 'Databeys | API Integration &' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByLabel('Contact Form', { exact: true }).getByRole('button', { name: 'Submit' }).click();
  await page.locator('#Home').click();
});