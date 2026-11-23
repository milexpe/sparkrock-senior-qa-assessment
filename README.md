# Sparkrock Senior QA Engineer Real Work Challenge

- **Target Application:** [SauceDemo](https://www.saucedemo.com/)
- **Automation Framework:** Playwright + JavaScript
- **Design Pattern:** Page Object Model (POM)

## Deliverables

- [TEST PLAN](docs/TEST_PLAN.md)
- [TEST CASES](docs/TEST_CASES.md)
- [LIVE CODING RECORDING](https://www.youtube.com/watch?v=KETvB2gQLhw)

## Prerequisites

- Node.js 20+ and npm

## Setup

```bash
npm install
npx playwright install chromium
```

## Run Tests

```bash
npm test                     # Run all tests (Chromium)
npx playwright test --headed # Run tests with browser visible
npx playwright test          # Run tests in headless mode (default)
npx playwright test --ui     # Open Playwright UI mode
```

## Automated Test Cases

### TC-011 — Product Information Consistency

Verifies that the Sauce Labs Backpack product name, description, and price remain consistent between the product catalog and product details page.

### TC-015 — Checkout Required Field Validation

Validates four independent negative scenarios using a data-driven approach:

- Missing first name
- Missing last name
- Missing postal code
- All required fields missing

Each scenario verifies the expected validation message and confirms that the application prevents the user from proceeding to the checkout overview.

All other documented test cases, including TC-014, remain manual test designs and candidates for future automation.

## Project Structure

```text
sparkrock-qa-assessment/
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── ProductDetailsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── TC-011.spec.js
│   └── TC-015.spec.js
├── test-data/
│   └── Reusable credentials, products, and validation scenarios
├── utils/
│   └── Reserved for future shared helpers
├── docs/
│   ├── TEST_PLAN.md
│   └── TEST_CASES.md
├── playwright.config.js
├── package.json
└── README.md
```