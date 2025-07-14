Feature: Shopping Cart Functionality

  Scenario Outline: Add items to the cart after login
    Given I am logged in as standard_user
    When I add item "<itemName>" to the cart
    Then the cart should contain "<itemName>"

    Examples:
      | itemName                  |
      | Sauce Labs Backpack       |
      | Sauce Labs Bike Light     |
      | Sauce Labs Bolt T-Shirt   |



