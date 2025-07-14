const FD_USERNAME = '[data-test="username"]'
const FD_PASSWORD = '[data-test="password"]'
const BTN_LOGIN = '[data-test="login-button"]'


class LoginPage {
  
  enterUsername(username) {
    cy.get(FD_USERNAME).clear().type(username)
  }

  enterPassword(password) {
    cy.get(FD_PASSWORD).clear().type(password)
  }

  clickLogin() {
    cy.get(BTN_LOGIN).click()
  }
}

module.exports = LoginPage