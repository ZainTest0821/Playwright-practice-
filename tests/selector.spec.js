const { test, expect } = require('@playwright/test');

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // Now use the pause method, from which we can pause the execution and then the playwright inspector will appear
    await page.pause();
    
    await page.click('#user-name'); // Using ID selector


    // Using data attribute to fill in the username
    await page.locator('[data-test="username"]').fill('standard_user'); // Specific selector for username

    // In Playwright we have locators method, and it is preferd and here I want to fill/add text so I have am using the 'fill'

    await page.locator('#user-name').fill('standard_user')

    //Using Xpath click on Login button
    await page.locator('//input[@id="login-button"]')
    await page.locator('xpath=//input[@id="login-button"]')

});
