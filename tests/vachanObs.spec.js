const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
//Open OBS and select english and verify first heading 
test ("OBS" , async ({browser,page})=> {

  await page.goto("https://vachanonline.com/");
  await page.getByLabel("Bible Stories").click();
  await page.locator('[aria-haspopup="listbox"]').click();
  await page.locator('//li[@role="option"][normalize-space()="English"]').click();
  expect(await page.getByRole('heading', { name: 'The Creation' }).isVisible());
});