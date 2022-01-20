export default () => ({
  elements: {
    toggle_btn: '//*[@class="sc-jKJlTe eJYhDh"]',
    login_btn: '//button[text()="Log in"]',
    email_txt: '//input[@id="email"]',
    password_txt: '//input[@id="password"]',
    accountName_lbl: (name: string) => `//h4[.="${name}"]`
  },

  signin(username: string, password: string) {
    cy.xpath(this.elements.toggle_btn).click();
    cy.xpath(this.elements.login_btn).click();
    cy.xpath(this.elements.email_txt).clear().type(username);
    cy.xpath(this.elements.password_txt).clear().type(password);
    cy.xpath(this.elements.login_btn).click();
  },

  verifyAccountName(name: string) {
    cy.xpath(this.elements.toggle_btn).click();
    cy.xpath(this.elements.accountName_lbl(name)).should('be.visible');
  }
})
