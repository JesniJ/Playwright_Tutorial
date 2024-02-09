const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
//Read Bible
test ("Read Bible" , async ({browser,page})=> {
    

  //Select language and version
  await page.goto("https://vachanonline.com/");
  await page.getByText("START").click();
  await page.locator('//button[@title="Select a Bible in your language and version"]').click();
  //await page.locator('//div[@id="simple-menu"]//div[1]//div[1]//div[1]//p[1]').click();
  await page.locator('//span[normalize-space()="English"]').click();
  await page.locator('//li[@value="eng-ESV"]').click();
  
  
  //select book and chapter
  await page.getByTitle("Choose a Bible book and chapter to read").click();
  await page.getByRole('button', { name: 'John', exact: true })
  await page.locator('[data-bookcode="jhn"][data-chapter="1"]').click();
  await page.getByText('The Word Became Flesh', { exact: true }).click();
  expect(page.locator('//span[normalize-space()="The Word Became Flesh"]')).toHaveText("The Word Became Flesh");

  await page.reload();
  //change the language and version of the bible and verify chapter Heading
  await page.getByTitle("Select a Bible in your language and version").click();
  await page.locator('//span[normalize-space()="हिंदी"]').click();
  await page.locator('//li[@value="hin-IRV"]').click();
  expect(page.getByRole('heading', { name: 'आदि में वचन था' }).isVisible());
  
  //forward and backward arrows and verify heading 
  await page.reload();
  await page.locator('#root svg').nth(3).click();
  expect(page.getByRole('heading', { name: 'यीशु का जी उठना' }).isVisible());
  await page.locator('#root svg').nth(4).click();
  expect(page.getByRole('heading', { name: 'आदि में वचन था' }).isVisible());
});  