const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');
const { standardUser, products } = require('../test-data/users');

test('TC-011: Verify Product Information Consistency', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await test.step('Step 1:Navigate to SauceDemo', async () => {
        await loginPage.goto();
    });

    await test.step('Step 2: Log in with standard credentials', async () => {
        await loginPage.login(standardUser);
    });

    let ProductInformation;
    await test.step('Step 3: Save product information from inventory page and click on the product', async () => {
        ProductInformation = await inventoryPage.getProductInformation(products.backpack);
        expect(ProductInformation.name).toBe(products.backpack);
        await inventoryPage.openProduct(products.backpack);
    });

      await test.step('Step 4: Compare Inventory Page vs Product Details Page', async () => {
        await productDetailsPage.expectInformation(ProductInformation);
    });
});