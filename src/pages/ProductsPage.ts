import { Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  /** Botón de un producto ("Add to cart" o "Remove"), buscado por nombre del producto. */
  productButton(productName: string, label: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: label });
  }

  async addToCart(productName: string) {
    await this.productButton(productName, 'Add to cart').click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
