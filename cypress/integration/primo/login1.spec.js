describe("primo", () => {
    it('should handle main user login', () => {
        cy.visit('http://discovere.emory.edu');
        cy.get('#exlidSignIn > a').click();
    }) 
    it('should now be in the login screen', () => {
        cy.url().should('contains', 'emory-primoprod');
        cy.get(':nth-child(2) > .btn').click();
    })
    it('should take you through emory shib', () => {
        cy.debug();
        cy.url().should('contains', 'SAML2');
    })
});