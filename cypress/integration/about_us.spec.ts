/// <reference types="cypress" />

import '@testing-library/cypress'

describe('About Us Flow', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Learn More section is shown correctly', () => {
        cy.get('[data-testid="learn-more-section"]').should('be.visible');
    })
    it('Should scroll to display correct content when the learn more button is clicked', () => {
        cy.get('[data-testid="learn-more-button"]').should('be.visible').click();
        cy.get('[data-testid="mission-statement-section"]').should('be.visible');
        cy.get('[data-testid="need-section"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="committee-group-profile-section"]').scrollIntoView().should('be.visible');
    })
})