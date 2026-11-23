const { expect } = require('@playwright/test');
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  item(name) {
  return this.items.filter({
    has: this.page.locator('[data-test="inventory-item-name"]', {
      hasText: name
      })
    });
  }
  
  async getProductInformation(name) {
    const item = this.item(name);
    await expect(item).toHaveCount(1);
    return {
      name: await item.locator('[data-test="inventory-item-name"]').innerText(),
      description: await item.locator('[data-test="inventory-item-desc"]').innerText(),
      price: await item.locator('[data-test="inventory-item-price"]').innerText(),
    };
  }
  
  async openProduct(name) {
    await this.item(name).locator('[data-test="inventory-item-name"]').click();
    await expect(this.page).toHaveURL(/inventory-item\.html/);
  }
  
  async addProduct(name) {
    const item = this.item(name);
    await expect(item).toHaveCount(1);
    await item.getByRole('button', { name: 'Add to cart' }).click();
    await expect(item.getByRole('button', { name: 'Remove' })).toBeVisible();
  }
  
  async openCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }
}
module.exports = { InventoryPage };