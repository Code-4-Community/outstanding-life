let LOCAL_URL = 'http://localhost:3000/programs';

describe('Programs Page', () => {
  beforeEach(() => {
    cy.visit(LOCAL_URL);
  });

  it('should display programs page contents', () => {
    cy.get('[data-cy=programs-heading]').should('be.visible');
    cy.get('[data-cy=programs-list]').scrollIntoView().should('be.visible');
  });
});