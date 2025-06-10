module.exports = { default: '--publish-quiet' };

// Cucumber  JS commands
// npx cucumber-js

// In order to exit after execution

// npx cucumber-js  —exit

// To run specific test :
//  npx cucumber-js features/Ecommerce_ErrorValidation.feature --exit

// To run specific tags:
// npx cucumber-js --tags "@regression" --exit

// To run parallel :
// #note : In cucumber u cannot run feature file in parallel but scenario can be executed parallel
// npx cucumber-js features/Ecommerce_ErrorValidation.feature --parallel 2 --exit

// To generate report in html:
// npx cucumber-js features/Ecommerce_ErrorValidation.feature --parallel 2 --exit --format html:cucumber-report.html

// Retry execution:
// npx cucumber-js --tags "@regression" --retry 1  --exit --format html:cucumber-report.html
