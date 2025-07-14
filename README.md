# BinusCypressBDD

This project demonstrates **end-to-end testing** using [Cypress](https://www.cypress.io/) with the **Cucumber BDD** approach and the **Page Object Model (POM)** pattern.  
It is designed for web UI automation, using feature files for scenarios and JavaScript classes for page interactions.

---

## 📁 Project Structure

```
BinusCypressBDD/
│
├── cypress/
│   ├── e2e/
│   │   └── features/                # BDD: Gherkin feature files
│   │       └── login.feature
│   │
│   ├── pages/                       # POM: Page Object Model classes
│   │   ├── LoginPage.js
│   │   └── CartPage.js
│   │
│   ├── support/
│   │   ├── step_definitions/        # BDD: Step definitions (glue code)
│   │   │   └── loginSteps.js
│   │   └── e2e.js                   # Cypress support file (reporter registration, commands)
│   │
│   └── screenshots/                 # Cypress screenshots (auto-generated on failure)
│
├── mochawesome-report/              # Mochawesome HTML reports (auto-generated)
├── cypress.config.js                # Cypress configuration (BDD, POM, reporter setup)
├── package.json
└── ...
```

---

## 🧩 Key Technologies

- **Cypress**: End-to-end test runner.
- **Cucumber (Gherkin)**: BDD syntax for writing test scenarios.
- **@badeball/cypress-cucumber-preprocessor**: Enables `.feature` files in Cypress.
- **Page Object Model (POM)**: Organizes page interactions in classes.
- **cypress-mochawesome-reporter**: Generates HTML reports with embedded screenshots.

---

## 🚦 How It Works

- **Feature files** (`.feature`) describe scenarios in plain English (Gherkin).
- **Step definitions** (`step_definitions/*.js`) implement the steps using Cypress commands and POM classes.
- **Page Object Model** (`pages/*.js`) encapsulates UI interactions for each page.
- **Cypress config** sets up the BDD preprocessor and the Mochawesome reporter.

---

## 📝 Example: CartPage.js (POM)

```javascript
class CartPage {
  addItemToCart(itemName) {
    cy.contains('.inventory_item', itemName)
      .find('button')
      .click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  cartShouldContain(itemName) {
    cy.get('.cart_item').should('contain.text', itemName)
  }
}

export default CartPage
```

---

## 🛠️ Running Tests & Generating Reports

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run tests (headless, generates report):**
   ```
   npx cypress run
   ```

3. **View Mochawesome report:**
   - Open `mochawesome-report/mochawesome.html` in your browser.
   - Failed tests will have embedded screenshots.

---

## 📚 References

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)

---

## 📝 Notes

- **Screenshots** are automatically captured on test failure and embedded in the HTML report.
- **Do not move or rename** screenshots or report files after test execution to avoid broken links in reports.
- The project is structured for clarity and maintainability, following best practices for BDD and POM in Cypress.

---
