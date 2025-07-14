class CartPage {
  addItemToCart(itemName) {
    cy.contains('.inventory_item', itemName)
      .find('button')
      .click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  cartShouldContain(itemName) {
    cy.get('.cart_item').should('contain.text', itemName)
  }
}

export default CartPage
