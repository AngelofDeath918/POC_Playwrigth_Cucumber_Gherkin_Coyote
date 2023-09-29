import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from '@playwright/test'
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60000);

    When('user click on the SignUp for Coyote button', async function () {
        await pageFixture.page.getByRole('link', { name: 'Sign up for CoyoteGO' }).click();
        await expect(pageFixture.page.getByRole('heading', { name: 'Create Your CoyoteGO ® Shipper Account' })).toBeVisible();
        console.log("Page Loaded successfully with title : " + await pageFixture.page.title());        
    
    });

    Then('the user fills the signUp form', async function () {
        
        await pageFixture.page.getByLabel('First Name').click();
        await pageFixture.page.getByLabel('First Name').fill('Cristhiam');
        await pageFixture.page.getByLabel('Last Name').click();
        await pageFixture.page.getByLabel('Last Name').fill('Cruz');
        await pageFixture.page.getByLabel('Work Email').click();
        await pageFixture.page.getByLabel('Work Email').fill('cd@cd.com');
        await pageFixture.page.getByLabel('Phone Number').click();
        await pageFixture.page.getByLabel('Phone Number').fill('(326) 548-5987');
        await pageFixture.page.getByLabel('EXT').click();
        await pageFixture.page.getByLabel('EXT').fill('123');
        await pageFixture.page.getByLabel('Job Title').click();
        await pageFixture.page.getByLabel('Job Title').fill('QA');
        await pageFixture.page.getByLabel('Company Name').click();
        await pageFixture.page.getByLabel('Company Name').fill('Test');
        await pageFixture.page.getByLabel('Website').fill('www.test.com');
        await pageFixture.page.getByLabel('Address', { exact: true }).click();
        await pageFixture.page.getByLabel('Address', { exact: true }).fill('calle falsa 123');
        await pageFixture.page.locator('#react-select-2-input').click();
        await pageFixture.page.locator('#react-select-2-input').fill('dallas');
        await pageFixture.page.getByRole('menuitem', { name: 'Dallas, TX, United States' }).click();
        await pageFixture.page.getByLabel('Zip Code').click();
        await pageFixture.page.getByLabel('Zip Code').fill('75203');
    
    });
    
    When('confirmation message is displayed', async function () {
        await pageFixture.page.getByRole('button', { name: 'GET STARTED' }).click();
        await pageFixture.page.waitForLoadState();
        //await pageFixture.page.frameLocator('iframe[title="Feedback Survey"]').getByRole('button', { name: 'Close', exact: true }).click();
        const successMessage = await pageFixture.page.locator("//h4[text()='Thank you!']").textContent();
        console.log(successMessage);
        console.log("Page Loaded successfully with title : " + await pageFixture.page.title());                   
    
    });