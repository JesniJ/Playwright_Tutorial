const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
test('Notes', async({browser}) => { 
    //Creating new default cognito instance and page without using global variables from playwright
    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "seraphin.jes@gmail.com";
    const password = "8939421519@Jes";

    await page.goto("https://vachanonline.com/");
    //SignIn
    await page.locator('//span[normalize-space()="Sign in"]').click();
    await page.locator ('//input[@id="email"]').fill(email);
    await page.locator('//input[@id="password"]').fill(password);
    await page.locator('(//span[@class="MuiButton-label"][normalize-space()="Sign in"])[2]').click();

    //open study mode, select a verse to add notes and verify notes created correctly
    await page.getByText("START").click(); 
    await page.getByTitle("Select a Bible in your language and version").click();
    await page.locator('//span[normalize-space()="English"]').click();
    await page.locator('//li[@value="eng-ESV"]').click();
    // await page.getByRole('button', { name: 'John', exact: true })
    // await page.locator('[data-bookcode="jhn"][data-chapter="1"]').click();
    await page.getByTitle("Notes").click(); // click notes icon from side menu bar to add notes
    //await page.locator('data-verse="2"').click(); //select second verse for adding notes
    await page.getByText('2 He was in the beginning').click();
    await page.locator('[type="button"][aria-label="add"]').click();
    await page.locator('[role="textbox"]').fill("Note for John 1:2");
    await page.getByText("Save").click();
    expect(await page.getByText("Note for John 1:2").isVisible());

    
});