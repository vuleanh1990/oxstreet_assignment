declare namespace Cypress {
  interface Chainable {
    /**
      * Command to login to Ox Street using API, then put token into local storage for quick login
      * @example cy.loginByAPI('anh.vu@yopmail.com','password123')
      */
    loginByAPI(username: string, password: string): Chainable<any>;
  }
}
