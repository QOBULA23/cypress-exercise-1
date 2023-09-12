describe("Configure browser", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

        it('Log in with invalid password', () => {
        cy.get('btn-make-appointment').click()
        cy,get('txt-username').type('John Doe')
        cy.get('txt-password').type('test')
        cy.get('btn-login').click()
        cy.get('text-danger')
        .invoke('text').should('eq', 'Login failed! Please ensure the username and password are valid.')
    })

    it('Log in with invalid username', () => {
        cy.get('btn-make-appointment').click()
        cy,get('txt-username').type('test')
        cy.get('txt-password').type('ThisIsNotAPassword')
        cy.get('btn-login').click()
        cy.get('text-danger')
        .invoke('text').should('eq', 'Login failed! Please ensure the username and password are valid.')
    })

    it('Log in with empty username and password fields', () => {
        cy.get('btn-make-appointment').click()
        cy.get('btn-login').click()
        cy.get('text-danger')
        .invoke('text').should('eq', 'Login failed! Please ensure the username and password are valid.')
    })