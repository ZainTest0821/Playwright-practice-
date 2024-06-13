import { test, expect } from '@playwright/test';


//Use the describe function, and there is also option available to expand or close the test.describe
test.describe('All my test are in this group', () => {


// This is a login test. As we need to login again and again, we use beforeEach annotation.
test.beforeEach(async ({ page }) => {

    
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
});

// Close the page after each tests
test.afterEach(async ({ page}) => {
  await page.close();
});

// This is HomePage test
test('homepage', async ({ page }) => {


  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click();
  await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=1');
  await page.locator('[data-test="add-to-cart"]').click();
});


// This is Logout test
test('logout', async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  await page. locator('text=Open Menu') .click();
  await page.locator ('text=Logout').click();
  await page.waitForURL( 'https://www.saucedemo.com/');
});

//I am closing the describe function here because I want that all the test should be add in test.describe function
})






// // Go to website

// await page.goto('https://demoqa.com/');
// // Pause the test which will open Playwright inspector
// await page.pause();

// // Click on Forms 
// await page.locator('div').filter({ hasText: /^Forms$/ }).first().click();

// // Click on practice form
// await page. getByRole('listitem').click()

// // Fill some value in forms
// //Fill first name and lastname, Email, Select the gender, MobileNumber, Subject, and click on Submit

// await page.locator('//input[@placeholder= "First Name"]').fill('Test');
// await page.locator( '//input[@placeholder= "Last Name"]').fill( 'User');

// await page.getByPlaceholder('name@example.com').fill('testuser@test.com')

// await page.getByText ('Male',{exact: true}).click();

// await page.locator ( '//input[@placeholder= "Mobile Number"]').fill('00923004567')

// await page.locator( '//*[@id ="submit"]').click()

