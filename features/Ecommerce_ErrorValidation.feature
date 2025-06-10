Feature: Ecommerce validations

#note : In cucumber u cannot run feature file in parallel but scenario can be executed parallel

@negative
Scenario: Verify the error in application
   Given login to ecommerce2 application with "wrongUsername" and "learning@"
   Then Verify Error message is displayed


@multiValidation
Scenario Outline: Verify the error in application
   Given login to ecommerce2 application with "<username>" and "<password>"
   Then Verify Error message is displayed

Examples:
    | username| password| 
    | wrongUsername  | learning@ |
    | Incorrect | playwright |