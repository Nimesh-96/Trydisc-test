describe('template spec', () => {
  it('validation', () => {
    cy.visit('https://dev.trydiscs.com/disc-matrix')

    cy.get('.bg-white > .cursor-pointer > .full-width').should('be.visible')

    cy.get('.q-table__container').should('be.visible')

    cy.get('.text-h4').should('contain','DISC MATRIX')

    cy.get(':nth-child(16) > :nth-child(7)').scrollIntoView({duration:5000})

    cy.get('.q-mr-xs').trigger('mouseover')

    cy.wait(2000)

    cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content').click()
  })

  it('links', () => {

    cy.visit('https://dev.trydiscs.com/disc-matrix')

    cy.wait(3000)

    cy.get(':nth-child(4) > :nth-child(5) > .q-px-xs > :nth-child(6) > .ellipsis').click()

    cy.get('.my-card').should('be.visible')

    cy.get(':nth-child(1) > .q-pt-none').click() //iso 

    cy.wait(3000)

    cy.get(':nth-child(4) > :nth-child(5) > .q-px-xs > :nth-child(6) > .ellipsis').click() 

    cy.get(':nth-child(2) > .q-pt-none').click() // retailer site

    cy.wait(3000)
    
  })
  it('Filters', () => {

    cy.visit('https://dev.trydiscs.com/disc-matrix')

    cy.wait(3000)

    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // filters

    cy.wait(1000)

    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > :nth-child(3) > .td-filter').click()

    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click() // apply

    cy.wait(1000)

    cy.get(':nth-child(7) > :nth-child(4) > .q-px-xs > .col-md-6 > .ellipsis').click()

    cy.get(':nth-child(3) > .q-px-md > :nth-child(2) > :nth-child(2)').should('contain','Control Driver')

    cy.get('.my-card > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()

    cy.wait(1000)
    
    cy.get('.applied-filters > .row > .cursor-pointer').click() //clear

    cy.wait(1000)

    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // filters

    cy.wait(1000)

    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(2) > .q-pa-none > .td-brands-wpr > .q-scrollarea__container > .q-scrollarea__content > :nth-child(8) > .td-filter').click()

    cy.wait(1000)
    
    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click() // apply

    cy.get(':nth-child(12) > :nth-child(5) > .q-px-xs > :nth-child(1) > .ellipsis').click()
    
    cy.get(':nth-child(3) > .q-px-md > :nth-child(3) > :nth-child(2)').should('contain','Innova')

    cy.wait(1000)

    cy.get('.my-card > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()

    cy.wait(1000)
    
    cy.get('.applied-filters > .row > .cursor-pointer').click() //clear


  })

})