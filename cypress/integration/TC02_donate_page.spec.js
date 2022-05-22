/// <reference types="cypress" />
let LOCAL_URL = 'http://localhost:3000/donate';

describe('Donate Flow', () => {
  beforeEach(() => {
    cy.visit(LOCAL_URL);
  });
  it('donate page is shown correctly', () => {
    cy.get('[data-cy=donate-top-message]').should('be.visible');
    cy.get('[data-cy=donate-top-submessage]').should('be.visible');
    cy.get('[data-cy=donate-button]').should('be.visible');
  });
});
