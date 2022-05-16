// https://docs.cypress.io/api/table-of-contents

describe('Sanity Test', () => {
    it('Visits the app root url', () => {
        // Cypress launches its own browser

        // visit the home url
        cy.visit('http://localhost:3000/');
        cy.contains('h1', 'Listen to Great Music!');
    });
});
