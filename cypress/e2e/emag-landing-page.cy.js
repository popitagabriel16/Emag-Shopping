import ShoppingPage from '../page-objects/LandingPage.js';

describe('Shopping Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add to cart the following items: a TV and an accessory for the TV', () => {
    ShoppingPage.navigateToTVCategory();
    ShoppingPage.addToCartTV();
    ShoppingPage.navigateToTVAccessories();
    ShoppingPage.addToCartTVAccessory();

    // VERIFY CART
    cy.contains("Vezi detalii cos", { timeout: 20000 }).click();
    cy.get(".cart-widget.cart-line ", { timeout: 20000 }).eq(0).should(($element) => {
      const text = $element.text();
      const regex = /samsung/i; // 'i' flag for case-insensitive matching
      expect(text).to.match(regex); // case-insensitive assertion
    });
    
    cy.get(".cart-widget.cart-line ", { timeout: 20000 }).eq(1).should(($element) => {
      const text = $element.text();
      const regex = /samsung/i; // 'i' flag for case-insensitive matching
      expect(text).to.match(regex); // case-insensitive assertion
    });
  })
})