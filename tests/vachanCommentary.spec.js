const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
test ("Read Commentary" , async ({browser,page})=> {

  await page.goto("https://vachanonline.com/");
  await page.getByText("START").click();
  await page.getByTitle("Commentaries").click();
  await page.locator('[aria-controls="commentary-menu"]').click();
  await page.getByRole('button', { name: 'english' }).click();
  await page.getByText("ESVGSB : ESV Global Study Bible").click();
  expect(await page.getByText("Introduction to John").isVisible());
});