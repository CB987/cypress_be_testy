describe("emory login", () => {   
    it('should log into emory through shib', () => {
        cy.visit('https://login.emory.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1');
    })
})