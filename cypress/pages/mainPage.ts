export default () => ({
  elements: {
    search_txt: '//input[@id="search"]',
    product_name: (name: string) => `//*[@title="${name}"]`,
  },

  searchProduct(name: string) {
    cy.xpath(this.elements.search_txt).type(name).type('{enter}');
  },

  verifyProductDisplay(name: string) {
    cy.xpath(this.elements.product_name(name)).should('be.visible');
  }
})
