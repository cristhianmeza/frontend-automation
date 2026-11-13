import { Locator, Page } from '@playwright/test';

/** Cubre los 3 pasos del checkout: datos de envío, resumen y confirmación. */
export class CheckoutPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly summaryItemNames: Locator;
  readonly finishButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.summaryItemNames = page.locator('[data-test="inventory-item-name"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.confirmationMessage = page.locator('[data-test="complete-header"]');
  }

  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
