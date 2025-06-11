# Playwright Automation Framework (JavaScript + Cucumber + Mocha)

This project is a robust web automation framework built using **Playwright**, integrated with **Cucumber** for BDD-style testing and **Allure** for rich reporting. It follows Page Object Model design pattern for modularity and maintainability.

---

## 📌 Features

- ✅ **Playwright** for modern browser automation (Chromium, Firefox, WebKit)
- 🧪 **Cucumber** for BDD syntax and scenario-driven testing
- 📊 **Allure Reports** integration for HTML test reports
- 🔁 Retry logic and tag-based test execution
- 🎭 Mocks and API testing using Playwright
- 💼 Page Object Model architecture

---

## 📦 Project Structure

│
├── features/ # Cucumber feature files (not shown but expected)
├── pageObjects/ # Page Object classes
│ ├── CartPage.js
│ ├── DashboardPage.js
│ ├── LoginPage.js
│ ├── OrdersHistoryPage.js
│ ├── OrdersReviewPage.js
│ └── POManager.js
├── tests/ # Playwright test scripts
│ └── WebAPI.spec.js
├── playwright.config.js # Playwright test runner configuration
├── cucumber.js # Cucumber command config
├── package.json # Project metadata and scripts
├── .prettierrc # Code formatting configuration
└── cucumber-report.html # HTML report output

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have **Node.js (v16+)** and **npm** installed:

```bash
node -v
npm -v
```

Install Dependencies:
npm install

Run All Playwright Tests:
npm test

🏷 Run Tagged Cucumber Tests:
npx cucumber-js --tags "@regressioncucumber" --retry 1 --exit --format html:cucumber-report.html

🧼 Clean Reports
npm run clean:allure

📊 Generate & Open Allure Report
npm run report

👤 Author
Mohammed Haseeb Ali Khan
https://www.linkedin.com/in/mohammed-haseeb-ali-khan-25397643/
