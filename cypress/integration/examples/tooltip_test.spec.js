describe('Testing tooltip component', function () {
  it('Visit localhost', function () {
    cy.visit('http://localhost:8080')
    cy.get('.container').click()
    cy.get('input').first().focus()
  })
})