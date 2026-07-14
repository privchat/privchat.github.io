import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto('http://127.0.0.1:5173/tw/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'output/playwright/home-tw.png', fullPage: true });
await page.goto('http://127.0.0.1:5173/cn/game/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'output/playwright/game-cn.png', fullPage: true });
await browser.close();
console.log('done');
