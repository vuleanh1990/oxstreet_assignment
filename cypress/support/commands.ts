Cypress.Commands.add('loginByAPI', (username: string, password: string) => {
    cy.request({
        url: 'https://api.oxstreet.com/users/v1/user/login',
        method: 'post',
        body: {
            username: username,
            password: password
        }
    }).then((resp: any) => {
        window.localStorage.setItem('profile', `"${JSON.stringify(resp.body.Profile).replace(/"/g, '\\"')}"`);
        window.localStorage.setItem('idToken', `"${resp.body.Token}"`);
    })
});
