const { expect } = require('@playwright/test');
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login({ username, password }) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}
module.exports = { LoginPage };
