/// <reference types="cypress" />
let LOCAL_URL = 'http://localhost:3000/about-us';

describe('About Us Flow', () => {
  beforeEach(() => {
    cy.visit(LOCAL_URL);
  });
  it('learn more section is shown correctly', () => {
    cy.get('[data-cy=learn-more-section]').should('be.visible');
  });
  it('should scroll to display correct content when the learn more button is clicked', () => {
    cy.get('[data-cy=learn-more-button]').should('be.visible').click();
    cy.get('[data-cy=mission-statement-section]').should('be.visible');
    cy.get('[data-cy=need-section]').scrollIntoView().should('be.visible');
    cy.get('[data-cy=leadership-team-section]').scrollIntoView().should('be.visible');
  });
});
