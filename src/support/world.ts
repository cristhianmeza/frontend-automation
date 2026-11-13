import { setWorldConstructor, World } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

export class CustomWorld extends World {
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  productsPage!: ProductsPage;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;
}

setWorldConstructor(CustomWorld);
