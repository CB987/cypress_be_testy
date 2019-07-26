describe("primo", function(){ 
    it('should handle a simple search', function() {
        cy.visit('http://discovere.emory.edu');
        cy.url().should('contains', 'action');
        cy.get('#search_field').should('exist').type("water{enter}");
        cy.get('#exlidResult1 > .EXLSummary > .EXLSummaryContainer > .EXLSummaryFields > .EXLResultTitle > a > .searchword').click();
        cy.url().should('contains', 'water');
        cy.wait(5000).then(function() {
            cy.get('button[.EXLNext=')
        })
    })
}); 
