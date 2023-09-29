import { Before, After, BeforeAll, AfterAll, Status} from "@cucumber/cucumber"
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser
let page: Page
let context: BrowserContext;

BeforeAll(async function (){
    browser = await chromium.launch({ headless: false });   
} )

Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;    
    
} )

After(async function ({ pickle, result }) {
    console.log(result?.status);
    //Screenshot
    const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
    
    await this.attach(img, "image/png");

    await pageFixture.page.close();
    await context.close();
    
})


AfterAll(async function (){
    await browser.close();
} )