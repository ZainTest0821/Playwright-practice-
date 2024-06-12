const { test, expect, chromium } = require('@playwright/test');

    test('Video reco in slo motion at Test Level', async ({ }) => { // Here we will not use 'page' after the async

        //Browser Launch

        const browser = await chromium.launch({

            // do headless false mean I want headed mode
            headless : false,

            slowMo: 500
        });

        // Creating new context

        const context = await browser.newContext({

            recordVideo: {

                // I want to save video in the 'video' folder

                dir: 'videosoftest/' ,

                // I want the resolution of video recording
                size: {width: 800 , height: 800}
            }

            
        });

        // Creating and declaring new page

        const page = await context.newPage();


        // Go to URL

        await page.goto('https://admin-demo.nopcommerce.com/login')

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



        // Close the context
        await context.close();


    })