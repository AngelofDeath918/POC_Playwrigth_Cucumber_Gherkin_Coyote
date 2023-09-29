import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from '@playwright/test'
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60000);

    Given('a user navigates to the application', async function () {
       
        await pageFixture.page.goto("https://pantheondev.coyote.com/");
        await pageFixture.page.waitForLoadState();
        await pageFixture.page.mouse.wheel(200, 200);
        console.log("Page Loaded successfully with title : " + await pageFixture.page.title());
        await pageFixture.page.getByRole('link', { name: 'North America' }).click();  

    })

    When('user click on the login link', async function () {

        await pageFixture.page.getByRole('link', { name: 'Log In', exact: true }).click();
        await pageFixture.page.waitForLoadState();
               
    });

    Then('the login page is displayed', async function () {
        
        await expect(pageFixture.page.getByRole('link', { name: 'Forgot Username or Password?' })).toBeVisible();
        console.log("Page Loaded successfully with title : " + await pageFixture.page.title());        

    });