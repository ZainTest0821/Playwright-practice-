const {test,expect} = require ('@playwright/test')

test ('Selectors Demo', async ({page})   =>  {

    await page.goto('https://www.saucedemo.com')
    //Now use the pause method, from which we can pause the execution and then the playwright inspector will appear
    await page.pause()
    await page.click('id=user-name')

    // In Playwright we have locators method, and it is preferd and here I want to fill/add text so I have am using the 'fill'

    await page.locator('id=user-name').fill('standard_user')
});