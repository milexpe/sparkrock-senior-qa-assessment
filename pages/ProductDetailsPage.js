const { expect } = require('@playwright/test');

class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.name = page.locator('[data-test="inventory-item-name"]');
    this.description = page.locator('[data-test="inventory-item-desc"]');
    this.price = page.locator('[data-test="inventory-item-price"]');
  }

  async expectInformation(expected) {
    await expect(this.page).toHaveURL(/inventory-item\.html/);
    await expect(this.name).toHaveText(expected.name);
    await expect(this.description).toHaveText(expected.description);
    await expect(this.price).toHaveText(expected.price);
  }
}
module.exports = { ProductDetailsPage };
