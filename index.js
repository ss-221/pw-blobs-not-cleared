import { chromium } from "@playwright/test";


( async () => {
  let options = {
    headless: false
  }

  const browser = await chromium.launch(options);
  const context = await browser.newContext();

  const mapsPage = await context.newPage();
  await mapsPage.goto('https://maps.google.com');

  await new Promise(resolve => setTimeout(resolve, 1000 * 60));
  
  const blobsPage = await context.newPage();
  await blobsPage.goto('chrome://blob-internals');

  await new Promise(resolve => setTimeout(resolve, 1000 * 30));
  
  await browser.close();
})();