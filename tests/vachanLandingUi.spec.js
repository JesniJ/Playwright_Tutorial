const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
test("landing page UI Basics" , async ({browser,page})=> {

 //Hovering on each language and verifying corresponding language script is visible  
  await page.goto("https://vachanonline.com/");
  const Assamese = await page.getByTitle("Click to read the Bible in অসমীয়া");
  await Assamese.hover();
  expect(await page.getByText("তোমাৰ আদেশবোৰৰ দ্বাৰাই মই জ্ঞান লাভ কৰোঁ;").isVisible());
  
  const Bengali  = await page.getByTitle("Click to read the Bible in বাঙালি");
  await Bengali.hover();
  expect(await page.getByText("তোমার বাক্য আমার চরনের প্রদীপ,").isVisible());

  const English = await page.getByTitle("Click to read the Bible in English");
  await English.hover();
  expect(await page.getByText("Your word is a lamp to my feet,").isVisible());

  const Gujarati = await page.getByTitle("Click to read the Bible in ગુજરાતી");
  await Gujarati.hover();
  expect(await page.getByText("তোমার বাক্য আমার চরনের প্রদীপ,").isVisible());

  //clicking on VachanOnline Logo and verifying page url 

  await page.getByRole('link', { name: 'logologo' }).click();
  const currentUrl = await page.url();
  expect(currentUrl).toBe('https://vachanonline.com/study');

  //go back to previous page and clicking on audio bible button and verify heading Audio Bible
  await page.goBack();
  await page.getByRole('button', { name: 'Audio'}).click();
  expect(await page.locator('h4.MuiTypography-root.jss2155.MuiTypography-h4').isVisible());

  // go back to previous page and click the language symbol and verify language changed
  await page.goBack();
  const svgElementHandle = await page.evaluateHandle(() => {
    return document.querySelector("svg");
  });
  svgElementHandle.click();
  await page.getByRole('menuitem', { name: 'Hindi' }).click();
  expect(page.getByText("अपनी भाषा में बाइबल का अध्ययन करें").isVisible());
});