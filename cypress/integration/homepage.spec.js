describe('example to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:4000/')
    })

    it('check header loaded', () => {
        cy.get('.header').should('have.length', 1)
        cy.get('.header .navigation nav a').should('have.length', 2)
    })
    it('check chategory link', () => {
        cy.get('a').contains('Explore Beverages').click();
        cy
            .location('href')
            .should('eq', 'http://localhost:4000/products/beverages')
    })
})