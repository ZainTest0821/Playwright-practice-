const { test, expect } = require('@playwright/test');

    test('Login demo test 3', async ({ page }) => {


        //First go to any website that we will use to do practice on assertions commands
        await page.goto('https://kitchen.applitools.com/')

        // Use pause method to pause the test and to open the Playwright inspector

        await page.pause()

        //Assertion uses

        // Check that the object is 'heading', { name: 'The Kitchen' } or not on web. Using to Have mean we are assuming that the locator is unique and at location 1

        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

        // Checking the present of oject using if method. and the $ command is used 

        if(await page.$ ('heading', { name: 'The Kitchen' })) {
      await expect(page.getByRole('heading', { name: 'The Kitchen' })).click()
        }


        // Checking that element is visible or hidden

        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
       // await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()


        // Checking that element is Enable or Disable

        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
        //await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()



        // Checking that element/object has text or not
        
        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
       // await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')


       // Checking the attributes 

       await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/ )
       //Checking that the object has class name 
       await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)


       // Visual Validation check

       await expect(page).toHaveScreenshot()


    })