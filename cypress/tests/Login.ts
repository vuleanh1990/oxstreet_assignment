import commonPage from '../pages/commonPage';
const CommonPage = commonPage();

describe('Verify login', () => {
  const acccountNotExist_msg = "We don't have an account for that email address. Please SIGN UP first";
  const wrongPassword_msg = "That's not the correct password";

  beforeEach(() => {
    cy.visit('/')
  });  

  it('Log in with invalid username and password of a non-existing account', () => {
    cy.fixture('users').then((users) => {
      CommonPage.signin(users.invalidUser2.username, users.invalidUser2.password);
    });
    cy.xpath(`//*[.="${acccountNotExist_msg}"]`).should('be.visible')
  });

  it('Log in with invalid password', () => {
    cy.fixture('users').then((users) => {
      CommonPage.signin(users.invalidUser1.username, users.invalidUser1.password);
    });
    cy.xpath(`//*[.="${wrongPassword_msg}"]`).should('be.visible')
  });

  it('Log in successfully as Normal User', () => {
    cy.fixture('users').then((users) => {
      CommonPage.signin(users.validUser.username, users.validUser.password);
      CommonPage.verifyAccountName(users.validUser.name)
    });
  });
});
