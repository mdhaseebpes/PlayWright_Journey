const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const dataset = JSON.parse(
  JSON.stringify(require('../../utils/testData.json'))
);
const { chromium } = require('playwright'); // FIX: Use 'playwright', not '@playwright/test'

Given(
  'login to ecommerce application with {string} and {string}',
  { timeout: 100 * 1000 }, //By default in cucumber each method should be executed within 5 seconds
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage(); // FIX: use this.poManager, not undefined poManager
    await loginPage.goTo();
    await loginPage.validLogin(username, password); // FIX: use the arguments, not dataset
  }
);

Given(
  'login to ecommerce2 application with {string} and {string}',
  async function (username, password) {
    const username1 = this.page.locator('input#username');
    const signInBtn = this.page.locator('#signInBtn');

    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(this.page).toHaveTitle(
      'LoginPage Practise | Rahul Shetty Academy'
    );
    console.log(await this.page.title());

    await username1.fill(username);
    await this.page.locator('[name="password"]').fill(password);
    await signInBtn.click();
  }
);

Then('Verify Error message is displayed', async function () {
  console.log(await this.page.locator('[style*="block"]').textContent());
  await expect(this.page.locator('[style*="block"]')).toContainText(
    'Incorrect username/password.'
  );
});
