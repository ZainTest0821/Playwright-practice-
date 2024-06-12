const { test, expect } = require('@playwright/test');

    test('Login demo test 3', async ({ page }) => {
        await page.goto ('https://admin-demo.nopcommerce.com/login')
       await page.pause()
        await page.locator('//input[@name="Email"] ').click()
        await page.locator('input[name="Email"]').press('Control+a')
        await page.locator('input[name="Email"]').fill('admin@yourstore.com')
        await page.locator('input[name= "Password"] ').click()
        await page.locator('input[name="Password"] ').press('Control+a')
        await page.locator ('input[name="Password"]').fill("admin")
        await page.locator('text=Log in').click()
        await page.locator ('#nopSideBarPusher i').click()
        await page.locator ('text=Logout').click()
        await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        await page.close()

})