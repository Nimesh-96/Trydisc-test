describe('template spec', () => {
 
  it('login', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123')
 
    cy.get('.q-btn__wrapper').click()

    cy.wait(3000)

    cy.get('[href="/admin/analytics/iso-tool"]').click()

    cy.wait(3000)

    cy.get('.col-12 > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').click() // all retailers

    cy.get('.q-menu>.q-virtual-scroll__content>:nth-child(2)>:nth-child(1)').click() 


   
   })
 
})