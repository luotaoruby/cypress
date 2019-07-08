context('MortgageRates Calculator', () => {
  beforeEach(() => {
    cy.visit('/mortgage-rates/a/mortgage-rate-calculator', {failOnStatusCode: false})
  })

  it('show calculator', () => {
    cy.get('#ml-calc-v2').
      should('contain', 'Mortgage Calculator').
      should('contain', 'Your Home Price:').
      find('button.next').should('contain', 'Next')

  })
})
