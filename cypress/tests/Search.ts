import mainPage from '../pages/mainPage';
const MainPage = mainPage();

describe('Verify search product successfully', () => {
  before(() => {
    cy.fixture('users').then((users) => {
      cy.loginByAPI(users.validUser.username, users.validUser.password);
    });
    cy.visit('/')
  });  

  it('Searched product should display', () => {
    MainPage.searchProduct('neptune blue')
    MainPage.verifyProductDisplay("KAWS x sacai x Blazer Low 'Neptune Blue'")
  });
});
