class ShoppingPage {
    // Method to navigate to the TV category
    navigateToTVCategory() {
      cy.contains("TV, Audio-Video & Foto", { timeout: 20000 }).eq(0).click();
    }
  
    // Method to add a TV to the cart
    addToCartTV() {
      const filterRating = ".star-rating-container";
      const filterDropdown = ".sort-control-btn-dropdown.hidden-xs";
      const filterSamsung = "[data-name='Samsung']";
      const addToCart = "Adauga in Cos";
  
      cy.get("[data-id='5470']", { timeout: 20000 }).click();
      cy.get(filterDropdown, { timeout: 20000 }).click();
      cy.contains("Pret descrescator", { timeout: 20000 }).click({ force: true });
      cy.wait(2000);
      cy.get(filterRating, { timeout: 20000 }).eq(2).click();
      cy.wait(2000);
      cy.get(filterSamsung, { timeout: 20000 }).eq(0).click();
      cy.wait(2000);
      cy.contains(addToCart, { timeout: 20000 }).eq(0).scrollIntoView().click();
      cy.get("[aria-label='Inchide']", { timeout: 20000 }).click();
    }
  
    // Method to navigate to TV accessories
    navigateToTVAccessories() {
      cy.contains("Accesorii TV ", { timeout: 20000 }).eq(0).click();
    }
  
    // Method to add a TV accessory to the cart
    addToCartTVAccessory() {
      const filterRating = ".star-rating-container";
      const filterDropdown = ".sort-control-btn-dropdown.hidden-xs";
      const filterSamsung = "[data-name='Samsung']";
      const addToCart = "Adauga in Cos";
  
      cy.wait(2000);
      cy.get(filterSamsung, { timeout: 20000 }).eq(0).click();
      cy.wait(2000);
      cy.get(filterDropdown, { timeout: 20000 }).click();
      cy.contains("Pret crescator", { timeout: 20000 }).click({ force: true });
      cy.wait(2000);
      cy.get(filterRating, { timeout: 20000 }).eq(2).click();
      cy.wait(2000);
      cy.contains(addToCart, { timeout: 20000 }).eq(0).scrollIntoView().click();
    }
  }
  
  export default new ShoppingPage();