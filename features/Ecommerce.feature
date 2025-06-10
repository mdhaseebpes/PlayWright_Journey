Feature: Ecommerce validations

@regression
Scenario: Placing the order
   Given login to ecommerce application with "xxxxxx@gmail.com" and "Xxxxxxxxx2@"
   When  Add "IPHONE 13 PRO" to cart
   Then Verify  "IPHONE 13 PRO" is displayed in the cart
   When Enter valid details and Place the order
   Then Verify order in present in the OrderHistory



