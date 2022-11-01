/// <reference types="cypress" />
let ABOUT_US_URL = 'http://localhost:3000/about-us'
let DONATE_URL   = 'http://localhost:3000/donate'

describe('NavBar Flow', () => {
    describe('Standard NavBar', () => {
        beforeEach(() => {
            cy.visit(ABOUT_US_URL);

            // large screen size
            cy.viewport(1536, 960);
        })
        it('navbar is shown correctly', () => {
            cy.get('[data-cy=standard-navbar]').should('be.visible');
        })
        it('should switch to the proper page when a link in the navbar is clicked', () => {
            cy.get('[data-cy=nav-bar-Donate]').should('be.visible').click();
            cy.url().should('eq', DONATE_URL);
        })
    })

    describe('Hamburger NavBar', () => {
        beforeEach(() => {
            cy.visit(ABOUT_US_URL);

            // small screen size
            cy.viewport(375, 667);
        })
        it('hamburger navbar is shown correctly', () => {
            cy.get('[data-cy=hamburger-navbar-icon]').should('be.visible');
        })
        it('should switch to the proper page when a link in the hamburger menu is clicked', () => {
            cy.get('[data-cy=hamburger-navbar-icon]').should('be.visible').click();
            cy.get('[data-cy=hamburger-navbar-Donate]').should('be.visible').click();
            cy.url().should('eq', DONATE_URL);
        })
    })
})