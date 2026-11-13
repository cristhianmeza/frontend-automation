import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from '@playwright/test';
import * as fs from 'fs';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CustomWorld } from './world';

setDefaultTimeout(30_000);

let browser: Browser;
let scenarioCount = 0;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
    slowMo: Number(process.env.SLOWMO ?? 0)
  });
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext({
    baseURL: 'https://www.saucedemo.com',
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: 'reports/videos', size: { width: 1280, height: 720 } }
  });
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function (this: CustomWorld, scenario) {
  this.attach(await this.page.screenshot(), 'image/png');

  const video = this.page.video();
  await this.context.close();

  if (video) {
    const name = scenario.pickle.name.replace(/[^a-z0-9]+/gi, '_').slice(0, 60);
    const file = `reports/videos/${++scenarioCount}_${name}.webm`;
    await video.saveAs(file);
    await video.delete();
    this.attach(fs.readFileSync(file), 'video/webm');
  }
});

AfterAll(async () => {
  await browser.close();
});