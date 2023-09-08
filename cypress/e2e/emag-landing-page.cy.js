describe('Shopping Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add to cart the following items: a TV and an accessory for the TV', () => {
    let filterRating = ".star-rating-container";
    let filterDropdown = ".sort-control-btn-dropdown.hidden-xs";
    let filterSamsung = "[data-name='Samsung']";
    let addToCart = "Adauga in Cos";

    // LANDING-PAGE
    cy.contains("TV, Audio-Video & Foto", {timeout:20000}).eq(0).click();
    cy.get("[data-id='5470']", {timeout:20000}).click();

    // ADDING TV IN CART
    cy.get(filterDropdown, {timeout:20000}).click();
    cy.contains("Pret descrescator", {timeout: 20000}).click({ force: true });
    cy.wait(2000);
    cy.get(filterRating, {timeout: 20000}).eq(2).click();
    cy.wait(2000);
    cy.get(filterSamsung, {timeout: 20000}).eq(0).click();
    cy.wait(2000);
    cy.contains(addToCart, {timeout:20000}).eq(0).scrollIntoView().click();
    cy.get("[aria-label='Inchide']", {timeout:20000}).click();
    cy.contains("Accesorii TV ", {timeout:20000}).eq(0).click();

    // ADDING TV ACCESSORY IN CART
    cy.wait(2000);
    cy.get(filterSamsung, {timeout: 20000}).eq(0).click();
    cy.wait(2000);
    cy.get(filterDropdown, {timeout:20000}).click();
    cy.contains("Pret crescator", {timeout: 20000}).click({ force: true });
    cy.wait(2000);
    cy.get(filterRating, {timeout: 20000}).eq(2).click();
    cy.wait(2000);
    cy.contains(addToCart, {timeout:20000}).eq(0).scrollIntoView().click();

    // VERIFY CART
    cy.contains("Vezi detalii cos", {timeout:20000}).click();
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