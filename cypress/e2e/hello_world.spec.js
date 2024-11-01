describe('Hello World', () => {
  it('should display the correct greeting', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Hello World');
  });
});