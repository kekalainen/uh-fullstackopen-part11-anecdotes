const baseUrl = 'http://localhost:3000';

describe('Anecdotes', function() {
  it('serves the front page properly', function() {
    cy.visit(baseUrl);
    cy.contains('Anecdotes');
  });

  it('loads anecdotes from the server', function() {
    cy.visit(baseUrl);
    cy.contains('If it hurts, do it more often');
  });
});
