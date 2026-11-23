# SauceDemo — Detailed Test Cases

**Application:** https://www.saucedemo.com/  
**Default user:** `standard_user` / `secret_sauce`  
**Execution:** Each case/scenario starts from a clean session unless noted. Expected results describe the demo application; potential production defects are flagged separately.

## TC-001 — Login with Standard User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in as `standard_user` / `secret_sauce` | Products page appears; verify catalog |
| 3 | Products are visible; open menu and Logout | Login page appears |

## TC-002 — Login with Locked-Out User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Attempt login as `locked_out_user` / `secret_sauce` | Locked-out error appears; verify access denied |
| 3 | User stays on Login page | Expected behavior is verified. |

## TC-003 — Login with Problem User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in as `problem_user` / `secret_sauce` | Products page appears; verify catalog |
| 3 | Products visible; Logout | Login page appears |

## TC-004 — Login with Performance Glitch User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in as `performance_glitch_user` / `secret_sauce` | Products page appears after authentication; verify catalog |
| 3 | Products visible; Logout | Login page appears |

## TC-005 — Login with Error User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in as `error_user` / `secret_sauce` | Products page appears; verify catalog |
| 3 | Products visible; Logout | Login page appears |

## TC-006 — Login with Visual User
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in as `visual_user` / `secret_sauce` | Products page appears; verify catalog |
| 3 | Products visible; Logout | Login page appears |

## TC-007 — Login with Invalid or Missing Credentials
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Try each username/password combination listed below in a fresh session | Appropriate validation error appears; verify no authentication |
| 3 | Login page remains displayed | Expected behavior is verified. |

**Credential combinations:** `invalid_user` / `secret_sauce` → mismatch; `standard_user` / `invalid_password` → mismatch; empty username / `secret_sauce` → Username required; `standard_user` / empty password → Password required; both empty → Username required.

## TC-008 — Verify Product Catalog Display
**Priority:** Medium

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; inspect catalog and count |
| 3 | Six products appear; verify each name, description, image, price and Add to cart button | All details visible |

## TC-009 — Verify Product Sorting Options (Data-Driven)
**Priority:** Medium

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; verify default A–Z order |
| 3 | Products sorted alphabetically; select each dropdown option listed below | Order matches chosen option |

**Sort options:** Default Name A–Z; Name A–Z; Name Z–A; Price low–high; Price high–low. Verify ordering after each selection.

## TC-010 — Navigate to Product Details and Return to Catalog
**Priority:** Medium

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; click Sauce Labs Backpack |
| 3 | Details page appears; verify name, description, image, price and Add to cart | All details visible; click Back to products |
| 4 | Catalog returns | Expected behavior is verified. |

## TC-011 — Verify Product Information Consistency
**Priority:** Medium

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; record Backpack name, description and price |
| 3 | Values recorded; open Backpack details | Details page appears; compare recorded values |
| 4 | All three values match | Expected behavior is verified. |

## TC-012 — Validate Shopping Cart Functionality
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; add Backpack and Bike Light |
| 3 | Badge reads 2; open cart and verify both products, price and quantity 1 | Correct items shown; Continue Shopping and reopen cart |
| 4 | Items retained; remove Backpack | Badge reads 1; remove Bike Light |
| 5 | Badge disappears; return to Products and reopen cart | Cart remains empty |

## TC-013 — Validate Shopping Cart Negative Scenarios
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Execute each of scenarios A–C below in an independent fresh session | Each negative scenario behaves as described |

**A — Duplicate prevention:** Log in, add Backpack, confirm button becomes Remove, attempt second add through standard UI, verify cart contains one Backpack with quantity 1.

**B — Remove last product:** Log in, add Backpack, open cart, remove it, verify badge disappears, navigate away and return; cart stays empty.

**C — Unauthenticated cart:** In a fresh session navigate to `/cart.html`; expect redirect to Login.

## TC-014 — Validate Checkout Functionality and Post-Checkout Cart State
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials and add Backpack and Bike Light | Badge reads 2; open cart and click Checkout |
| 3 | Customer information page appears; click Cancel then restart checkout | Cart retains both items; enter John / Doe / 90210 and Continue |
| 4 | Overview shows two items, quantities, prices, subtotal, tax and total; verify total equals subtotal plus tax | Amounts reconcile; click Cancel then reopen cart and restart checkout |
| 5 | Products retained; enter valid customer information and Continue | Overview returns; click Finish |
| 6 | Thank you for your order! appears; click Back Home and reopen cart | Badge absent and cart empty |

## TC-015 — Validate Checkout Required Field Validation
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | For each scenario below, log in as standard user in a fresh session and add Backpack | Badge reads 1; open cart and click Checkout |
| 3 | Information page appears; fill fields for selected scenario and click Continue | Specified required-field error appears; verify current page |
| 4 | Still on information page | Expected behavior is verified. |

**Field combinations:** Missing first name (Doe / 90210) → `Error: First Name is required`; missing last name (John / 90210) → `Error: Last Name is required`; missing postal code (John / Doe) → `Error: Postal Code is required`; all empty → `Error: First Name is required`.

## TC-016 — Validate Checkout with Empty Shopping Cart
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Log in with standard credentials | Products page appears; open empty cart and click Checkout |
| 3 | Information page appears; enter John / Doe / 90210 and Continue | Overview has no products; click Finish |
| 4 | Completion page appears; verify confirmation | Thank you for your order! appears |

**Observation:** SauceDemo may allow an empty-cart checkout; in a production application this could be a business-logic defect depending on requirements.

## TC-017 — Validate Checkout Workflow Bypass
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | Run scenarios A and B below independently | Observe the described direct-URL behavior |

**A — Bypass customer information:** Log in, add Backpack, navigate directly to `/checkout-step-two.html`, verify overview, click Finish, verify confirmation.

**B — Direct confirmation:** In a fresh session log in without completing an order, navigate directly to `/checkout-complete.html`, verify confirmation message.

**Observation:** These behaviors may represent workflow-validation defects in production.

## TC-018 — Validate Checkout Access Without Authentication
**Priority:** High

| Step | Test Step | Expected Result |
|---|---|---|
| 1 | Navigate to https://www.saucedemo.com/. | Login page is displayed. |
| 2 | In a fresh unauthenticated session, visit each checkout URL listed below | Redirected to Login page; verify checkout page inaccessible |
| 3 | No unauthenticated checkout access | Expected behavior is verified. |

**URLs (test independently):** `/checkout-step-one.html`, `/checkout-step-two.html`, `/checkout-complete.html`.
