const { test, expect } = require('@playwright/test');

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();  // Await context creation
  await context.tracing.start({ snapshots: true, screenshots: true });  // Start tracing
  page = await context.newPage();  // Await page creation
});

test.afterAll(async () => {
  if (context) {
    await context.tracing.stop({ path: 'test_trace_${Date.now()}.zip' });  // Stop tracing and save the trace
  }
}) ;

test('test my code', async () => {
  await page.goto('https://www.databeys.com/');
  await page.getByRole('button', { name: 'Services123' }).click();  // Ensure selector matches
  await page.getByLabel('Services').getByRole('link', { name: 'Email Marketing' }).click();
  await page.getByLabel('Newsletter', { exact: true }).getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByLabel('Contact Form', { exact: true }).getByRole('button', { name: 'Submit' }).click();s
});
