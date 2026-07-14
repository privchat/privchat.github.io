import { chromium } from 'playwright';
const browser = await chromium.launch();

const pages = [
  ['home', '/'],
  ['server', '/server/'],
  ['app', '/app/'],
  ['chat', '/chat/'],
  ['game', '/game/'],
  ['agents', '/agents/'],
  ['sdk', '/sdk/'],
  ['architecture', '/architecture/'],
  ['tutorials', '/tutorials/'],
  ['open-source', '/open-source/'],
  ['enterprise', '/enterprise/'],
  ['platform', '/platform/'],
];

for (const [name, route] of pages) {
  const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await desktop.goto(`http://127.0.0.1:5173${route}`, { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: `output/playwright/${name}-desktop.png`, fullPage: true });
  await desktop.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(`http://127.0.0.1:5173${route}`, { waitUntil: 'networkidle' });
  await mobile.screenshot({ path: `output/playwright/${name}-mobile.png`, fullPage: true });
  await mobile.close();
}

await browser.close();
console.log('done');
