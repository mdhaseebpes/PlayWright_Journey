const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const dataset = JSON.parse(
  JSON.stringify(require('../../utils/testData.json'))
);
const { test, expect, playwright } = require('@playwright/test');

When('Add {string} to cart', async function (productName) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then('Verify  {string} is displayed in the cart', async function (productName) {
  this.cartPage = this.poManager.getCartPage();
  await this.cartPage.VerifyProductIsDisplayed(productName);
  await this.cartPage.Checkout();
});
