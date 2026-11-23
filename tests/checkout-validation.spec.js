const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { standardUser, products, requiredFieldCases } = require('../test-data/users');

for (const scenario of requiredFieldCases) {
  test(`TC-015: ${scenario.name}`, async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await test.step('Navigate to SauceDemo and start checkout', async () => {
      await login.goto();
      await login.login(standardUser);
      await inventory.addProduct(products.backpack);
      await inventory.openCart();
      await cart.checkout();
    });

    await test.step('Submit invalid customer information and verify the error', async () => {
      await checkout.enterCustomer(scenario);
      await checkout.continue();
      await expect(checkout.error).toHaveText(scenario.error);
      await expect(page).toHaveURL(/checkout-step-one\.html/);
    });
  });
}