/// <reference types="cypress" />
let LOCAL_URL = 'http://localhost:3000/partners';

describe('Partners Flow', () => {
  beforeEach(() => {
    cy.visit(LOCAL_URL);
  });
  it('partners page is shown correctly', () => {
    cy.get('[data-cy=partners-header]').should('be.visible');
    cy.get('[data-cy=partners-logos]').should('be.visible');
  });
});
