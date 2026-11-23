# SauceDemo — Test Plan

## Version Control



| **Version** | **Date**   | **Updated&#xA0;** | **Details**   |
| ----------- | ---------- | ----------------- | ------------- |
| 1.0         | 23/11/2026 | Antonio Gutierrez | Initial Draft |



## 1. Introduction

This Test Plan was prepared for the Sparkrock Senior QA Engineer technical assessment. It outlines the testing approach, objectives, scope, strategy, and execution activities detailed in the following sections.

### 1.1 Test Item

The Application Under Test (AUT) is **SauceDemo**, a publicly accessible e-commerce demonstration website available at[ https://www.saucedemo.com/](https://www.saucedemo.com/).

## 2. Objective

The primary objective of this Test Plan is to define a structured approach for the Sparkrock Senior QA Engineer Real Work Challenge, covering the complete shopping workflow of the SauceDemo web application, from user authentication and product selection to shopping cart management and checkout completion.

## 3. Test Scope

### 3.1 In Scope

- **Authentication:** Valid and invalid login scenarios, including required-field validation.
- **Product Catalog:** Product visibility, selection, and sorting.
- **Shopping Cart:** Adding and removing products, verifying item details, quantities, and prices.
- **Checkout Process:** Required customer information, order totals, and successful order confirmation.





### 3.2 Out of Scope

- **Backend Testing**
- **External Integrations**
- **Non-Functional Testing**
- **Mobile Testing**

## 4. Features to Be Tested

### 4.1 User Authentication

- Login.
- Logout.
- Error Handling

### 4.2 Product Catalog

- Product information and sorting.
- Product detail navigation.

### 4.3 Shopping Cart

- Adding and removing products.
- Cart contents and item count validation.

### 4.4 Checkout Process

- Customer information validation.
- Order summary and total verification.
- Order completion and confirmation.

## 5. Features Not to Be Tested

- **About:** Validation of external Sauce Labs website content and functionality.
- **Dynamic Catalog:** Validation of dynamic product display behaviors, including lazy loading, loading spinners, and sliders
- **Reset App State:** Validation of the application state reset functionality.
- **External Links:** Validation of third-party websites accessed through footer links.
- **Visual Design:** Detailed validation of UI styling, layouts, and visual elements.

## 6. Test Strategy / Approach

### 6.1 Testing Approach

A risk-based testing approach will be followed, prioritizing critical functionality and user workflows that directly impact the shopping experience.

Test automation using Playwright with JavaScript will be addressed as a separate task within the Sparkrock Senior QA Engineer Real Work Challenge.

**Note:** Expected results reflect SauceDemo's current behavior. However, some behaviors may be considered defects in a production application, depending on business requirements

### 6.2 Test Prioritization

Test scenarios will be prioritized based on business impact, frequency of use, and potential risk of failure.

- **High Priority:** User authentication, shopping cart operations, and checkout completion, as failures in these areas directly prevent users from completing purchases.
- **Medium Priority:** Product sorting, product details, and navigation, as these features support the shopping experience but are generally less critical to completing a purchase.
- **Low Priority:** Non-essential navigation elements, as failures in these areas have minimal impact on the application's core shopping functionality and do not prevent users from completing a purchase. 



### 6.3 Test Design Techniques

The following techniques will be applied where appropriate:

- **Equivalence Partitioning:** Group valid and invalid inputs to reduce redundant test cases.
- **Positive and Negative Testing:** Verify expected behavior for successful and unsuccessful user interactions.
- **State Transition Testing:** Validate changes in shopping cart contents and checkout progression.

## 7. Risk Assessment and Mitigation

The following risks have been identified based on the application's critical functionality and the scope of this QA assessment.



| **Risk**                            | **Impact** | **Mitigation**                                                          |
| ----------------------------------- | ---------- | ----------------------------------------------------------------------- |
| Authentication failures             | High       | Prioritize valid and invalid login scenarios                            |
| Shopping cart inconsistencies       | High       | Validate cart contents, item counts, and product information            |
| Checkout failures                   | High       | Validate required fields, order totals, and successful order completion |
| Product information inconsistencies | Medium     | Verify product details and pricing across relevant pages.               |
| Navigation issues                   | Low        | Validate essential navigation paths within the shopping workflow.       |

## 8. Test Environment and Data

### 8.1 Test Environment



| **Environment** | **URL**                      |
| --------------- | ---------------------------- |
| Public Demo     | https://www.saucedemo.com/ |



### 8.2 Test Data

The following test credentials are available on the SauceDemo login page and will be used to validate authentication scenarios.

**Predefined Usernames:**

- standard_user
- locked_out_user
- problem_user
- performance_glitch_user
- error_user
- visual_user

**Password:**

- secret_sauce (shared across all predefined users)



**Invalid Credentials:**

- Username not included in the predefined user list.
- Password different from the predefined password.
- Empty username and/or password fields.

# 9. Test Design and Test Cases

### 9.1 Test Design

Test cases have been designed based on the functional requirements and user workflows identified in the Test Scope and Features to Be Tested sections.

The test design follows the risk-based approach defined in Section 6, prioritizing authentication, shopping cart functionality, and checkout completion.

### 9.2 Test Case Summary

| **Test Case ID** | **Functional Area** | **Test Scenario**                                            | **Priority** |
| ---------------- | ------------------- | ------------------------------------------------------------ | ------------ |
| TC-001           | Authentication      | Login with standard user                                     | High         |
| TC-002           | Authentication      | Login with locked-out user                                   | High         |
| TC-003           | Authentication      | Login with problem user                                      | High         |
| TC-004           | Authentication      | Login with performance glitch user                           | High         |
| TC-005           | Authentication      | Login with error user                                        | High         |
| TC-006           | Authentication      | Login with visual user                                       | High         |
| TC-007           | Authentication      | Login with invalid or missing credentials                    | High         |
| TC-008           | Product Catalog     | Verify product catalog display                               | Medium       |
| TC-009           | Product Catalog     | Verify product sorting options (data-driven)                 | Medium       |
| TC-010           | Product Catalog     | Navigate to product details and return to catalog            | Medium       |
| TC-011           | Product Catalog     | Verify product information consistency                       | Medium       |
| TC-012           | Shopping Cart       | Validate Shopping Cart Functionality                         | High         |
| TC-013           | Shopping Cart       | Validate Shopping Cart Negative Scenarios                    | High         |
| TC-014           | Checkout            | Validate Checkout Functionality and Post-Checkout Cart State | High         |
| TC-015           | Checkout            | Validate Checkout Required Field Validation                  | High         |
| TC-016           | Checkout            | Validate Checkout with Empty Shopping Cart                   | High         |
| TC-017           | Checkout            | Validate Checkout Workflow Bypass                            | High         |
| TC-018           | Checkout            | Validate Checkout Access Without Authentication              | High         |

### 9.3 Test Cases

Detailed test cases, including preconditions, test data, execution steps, and expected results, are documented separately in [TEST_CASES.md](TEST_CASES.md). A prioritized subset is selected for automation.

## 10. Test Automation Tools and Architecture

### 10.1 Test Automation Tools

Playwright with JavaScript was selected for its reliable browser automation, built-in assertions, automatic waiting, cross-browser support, and CI/CD integration capabilities.

The following tools and technologies will be used to create the automation framework:

- Playwright (JavaScript)
- Visual Studio Code
- Node.js / npm
- Git / GitHub

### 10.2 Automation Framework Architecture

The automation framework follows the Page Object Model (POM) design pattern to improve code reusability, readability, and maintainability.

- **pages/**: Contains page objects that encapsulate UI elements and reusable interactions.
- **tests/:** Contains automated test scenarios and their corresponding assertions.
- **utils/:** Contains shared helper functions and reusable utilities.
- **test-data/:** Stores test data used across different scenarios.
- **playwright.config.js:** Defines browser settings, base URL, reporting, retries, and failure artifacts.

## 11. Entry and Exit Criteria

### 11.1 Entry Criteria

- SauceDemo application is accessible and available for testing.
- Test environment and required tools are configured.
- Test cases and test data are prepared.
- Valid user credentials are available.
- Application functionality is sufficiently stable to begin testing.

### 11.2 Exit Criteria

- All planned test cases have been executed or documented as blocked.
- High-priority test cases have been evaluated.
- Test results and identified defects are documented.
- Critical or high-severity defects are reported.
- Test execution results and outstanding risks are summarized.

## 12. Test Deliverables

The following deliverables will be provided as part of the Sparkrock Senior QA Engineer Real Work Challenge:

- **Test Plan:** Documents the testing approach, scope, strategy, priorities, and risks.
- **Test Cases:** Separate document containing detailed test scenarios, steps, and expected results.
- **Automation Framework:** Playwright with JavaScript, following the Page Object Model (POM) design pattern.
- **Live Coding Recording:** Video demonstrating the development, execution, and explanation of automated tests.
- **Source Code Repository:** Git repository containing the automation framework, test scripts, and execution instructions.



## 13. Test Execution

- All test cases will be executed manually first to validate functionality and expected behavior.
- Based on priority and automation suitability, selected test cases will be automated using Playwright.
- Each test will be executed independently to avoid dependencies between scenarios.
- Test results will be evaluated against the documented expected results.

## 14. Future Improvements

- **Automation coverage:** Gradually automate remaining test cases, prioritizing critical business workflows and frequently executed scenarios.
- **Regression Suite:** Organize automated tests into smoke and regression suites to support efficient execution.
- **CI/CD Integration:** Integrate Playwright tests into a CI/CD pipeline for automated execution and reporting.
