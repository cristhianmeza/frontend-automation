import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('agrega el producto {string} al carrito', async function (this: CustomWorld, product: string) {
  await this.productsPage.addToCart(product);
});

When('accede al carrito de compras', async function (this: CustomWorld) {
  await this.productsPage.goToCart();
});

Then('el contador del carrito muestra {int} producto(s)', async function (this: CustomWorld, count: number) {
  await expect(this.productsPage.cartBadge).toHaveText(String(count));
});

Then(
  'el producto {string} muestra el botón {string}',
  async function (this: CustomWorld, product: string, label: string) {
    await expect(this.productsPage.productButton(product, label)).toBeVisible();
  }
);

Then('ve {int} producto(s) en el carrito', async function (this: CustomWorld, count: number) {
  await expect(this.cartPage.items).toHaveCount(count);
});

Then('el carrito contiene el producto {string}', async function (this: CustomWorld, product: string) {
  await expect(this.cartPage.itemNames.filter({ hasText: product })).toHaveCount(1);
});
