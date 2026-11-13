import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('inicia el proceso de compra', async function (this: CustomWorld) {
  await this.cartPage.checkout();
});

When(
  'completa sus datos de envío: nombre {string}, apellido {string} y código postal {string}',
  async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
    await this.checkoutPage.fillShippingInfo(firstName, lastName, postalCode);
  }
);

When('continúa al resumen de la orden', async function (this: CustomWorld) {
  await this.checkoutPage.continue();
});

Then('ve en el resumen el producto {string}', async function (this: CustomWorld, product: string) {
  await expect(this.checkoutPage.summaryItemNames.filter({ hasText: product })).toHaveCount(1);
});

When('finaliza la compra', async function (this: CustomWorld) {
  await this.checkoutPage.finish();
});

Then('ve el mensaje de confirmación {string}', async function (this: CustomWorld, message: string) {
  await expect(this.checkoutPage.confirmationMessage).toHaveText(message);
});
