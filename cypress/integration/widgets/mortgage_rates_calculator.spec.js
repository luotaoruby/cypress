context('MortgageRates Calculator', () => {
  beforeEach(() => {
    cy.visit('/mortgage-rates/a/mortgage-rate-calculator', {failOnStatusCode: false})
  })

  it('should works.', () => {
    cy.get('#ml-calc-v2').should('be.exist').
      should('contain', 'Mortgage Calculator')

    // Step 1
    cy.get('#ml-calc-v2').
      contains('Your Home Price: $200,000').should('be.visible')

    cy.get('#ml-calc-v2').
      contains('Your Down Payment:$40,000').should('not.visible')

    cy.get('#ml-calc-v2').
      find('button.previous').should('not.visible')

    cy.get('#ml-calc-v2').
      find('button.next').should('be.visible').click()

    // Step 2
    cy.get('#ml-calc-v2 button.previous').should('be.visible')

    cy.get('#ml-calc-v2').
      contains('Your Home Price: $200,00').should('not.visible')

    cy.get('#ml-calc-v2').
      contains('Your Down Payment:$40,000').should('be.visible')

    cy.get('#ml-calc-v2').
      find('button.next').should('be.visible').click()

    // Step 3
    cy.get('#ml-calc-v2').
      contains('Preferred Loan Term (Fixed Rate)').should('be.visible')

    cy.get('#ml-calc-v2').
      contains('15 years').should('be.visible')
    cy.get('#ml-calc-v2').
      contains('20 years').should('be.visible')
    cy.get('#ml-calc-v2').
      contains('30 years').should('be.visible')

    cy.get('#ml-calc-v2').
      find('button.next').should('be.visible').click()

    // Step 4
    cy.get('#ml-calc-v2').
      contains('Preliminary Monthly Payment Estimate: $911').should('be.visible')

    cy.get('#ml-calc-v2').
      contains('Improve Your Payment').should('be.visible')
  })
})
