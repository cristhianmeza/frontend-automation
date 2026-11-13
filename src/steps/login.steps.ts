import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('que el usuario está en la página de login', async function (this: CustomWorld) {
  await this.loginPage.open();
});

When(
  'inicia sesión con el usuario {string} y la contraseña {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then('es redirigido a la página de productos', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/inventory\.html/);
  await expect(this.productsPage.title).toHaveText('Products');
});

Then('ve el mensaje de error {string}', async function (this: CustomWorld, message: string) {
  await expect(this.loginPage.errorMessage).toHaveText(message);
});
