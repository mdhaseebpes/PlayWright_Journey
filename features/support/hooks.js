const {
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
} = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const { chromium } = require('playwright');

Before(async function () {
  const browser = await chromium.launch({ headless: false }); // headless: false to see the browser
  const context = await browser.newContext();
  this.page = await context.newPage();

  this.poManager = new POManager(this.page);
});

// Before({tags: "@foo"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });

//   Before({tags: "@foo and @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo and @bar
//   });

//   Before({tags: "@foo or @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo or @bar
//   });

//   // You can use the following shorthand when only specifying tags
//   Before("@foo", function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });

BeforeStep(function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    await this.page.screenshot({ path: 'screenshot1.png' });
  }
});

After(async function () {
  console.log('scenario completed');
});
