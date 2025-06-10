const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const dataset = JSON.parse(
  JSON.stringify(require('../../utils/testData.json'))
);
const { test, expect, playwright } = require('@playwright/test');

let orderId;

When('Enter valid details and Place the order', async function () {
  this.ordersReviewPage = this.poManager.getOrdersReviewPage();
  await this.ordersReviewPage.searchCountryAndSelect('ind', 'India');
  orderId = await this.ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
});

Then('Verify order in present in the OrderHistory', async function () {
  await this.dashboardPage.navigateToOrders();
  this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await this.ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(
    orderId.includes(await this.ordersHistoryPage.getOrderId())
  ).toBeTruthy();
});
