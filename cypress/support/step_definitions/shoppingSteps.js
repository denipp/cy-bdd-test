import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/LoginPage'
import CartPage from '../../pages/CartPage'

const loginPage = new LoginPage()
const cartPage = new CartPage()

let itemToCheck = ''

Given('I am logged in as standard_user', () => {
  cy.fixture('users').then((users) => {
    const user = users.standard_user
    cy.visit('https://www.saucedemo.com/')
    loginPage.enterUsername(user.username)
    loginPage.enterPassword(user.password)
    loginPage.clickLogin()
  })
})

When('I add item {string} to the cart', (itemName) => {
  itemToCheck = itemName
  cartPage.addItemToCart(itemName)
})

Then('the cart should contain {string}', () => {
  cartPage.openCart()
  cartPage.cartShouldContain(itemToCheck)
})

