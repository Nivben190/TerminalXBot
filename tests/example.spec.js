// @ts-check
const { test, chromium } = require('@playwright/test');
const url= "https://www.terminalx.com/"

test('get me product from terminalx', async () => {
  const browser = await chromium.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(url);
  const pages =["חולצות פולו לגברים","שעונים","טרנינג לגבר","בושם לגבר"];

  for (let index = 0; index < pages.length; index++) {
    await page.waitForSelector("button.search-button_1ENs");
    await page.click("button.search-button_1ENs");
    await page.waitForSelector("input.input_3rQh");
    await page.type("input.input_3rQh",`${pages[index]}`);
    page.keyboard.press('Enter');
     await page.waitForSelector(".search-results_2YMu");
     await  new Promise(r => setTimeout(r, 2500));  
     page.screenshot({fullPage:true,path:`./${pages[index]}.png`})
    await  new Promise(r => setTimeout(r, 2500));  
 }
 await browser.close();
  
});
