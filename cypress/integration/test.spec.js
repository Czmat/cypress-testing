/// <reference types="cypress" />

it('loads the home page', () => {
  cy.visit('public/index.html');

  cy.contains('This page');

  cy.get('[data-test]').click();
  cy.contains('h1', 'about');

  cy.get('button').click();
  cy.get('h2').should('exist');
  cy.get('img').should('exist');
});
