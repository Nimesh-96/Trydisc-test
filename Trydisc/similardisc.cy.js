describe('template spec', () => {

  it('PageValidation', () => {
    
    cy.visit("https://www.trydiscs.com/")
    
    cy.get(".q-field__input").type("Ace{enter}")
  
    cy.wait(4000)
  
    cy.contains('Ace').click()
  
    cy.wait(6000)

    cy.url().should('contain','Ace')

    cy.get('.sticky-top-row > :nth-child(1) > .disc-image').should('be.visible') // logo

    cy.get('.col-sm-2').should('exist') // search button

    cy.get('.sticky-top-row > :nth-child(2) > :nth-child(1)').should('contain','Ace') // disc name validation


  })

  it('RetailerVisit', () => {
    
    cy.visit("https://www.trydiscs.com/")
    
    cy.get(".q-field__input").type("Ace{enter}")
  
    cy.wait(4000)
  
    cy.contains('Ace').click()
  
    cy.wait(6000)
  
    cy.contains("Find").click()
  
    cy.get(".q-card__section > :nth-child(2)").click()
    
    cy.wait(4000)

  })

  it('ISO', () => {
    
    cy.visit("https://www.trydiscs.com/")
    
    cy.get(".q-field__input").type("Ace{enter}")
  
    cy.wait(4000)
  
    cy.contains('Ace').click()
  
    cy.wait(6000)
  
    cy.contains("Find").click()

    cy.get(":nth-child(1) > .q-pt-none").click()

    cy.wait(4000)
 
})

it('BrandSite', () => {
    
  cy.visit("https://www.trydiscs.com/")
  
  cy.get(".q-field__input").type("hex{enter}")

  cy.wait(4000)

  cy.contains('Hex').click()

  cy.wait(6000)

  cy.get(".sticky-top-row > :nth-child(1) > a > .disc-image").click()

  cy.wait(4000)


})

it('Pagenation', () => {
    
  cy.visit("https://www.trydiscs.com/")
  
  cy.get(".q-field__input").type("hex{enter}")

  cy.wait(4000)

  cy.contains('Hex').click()

  cy.wait(4000)

  cy.get(':nth-child(5) > div.col > :nth-child(1) > .flex > .q-pagination > div.row > :nth-child(1) > .q-btn__wrapper > .q-btn__content > .block').click()

  cy.wait(3000)

  cy.get(':nth-child(5) > div.col > :nth-child(1) > .flex > .q-pagination > :nth-child(7) > .q-btn__wrapper > .q-btn__content > .q-icon').click()

  cy.wait(3000)

  cy.visit("https://www.dev.trydiscs.com/")

  cy.get(':nth-child(1) > .q-pa-md > :nth-child(7) > .cursor-pointer > .q-ma-none').click()

  cy.wait(6000)

  cy.get('.q-field__native').type("grace")

  cy.wait(3000)

  cy.contains('Grace').click()
  
  cy.wait(6000)

})

it('Filters', () => {
    
  cy.visit("https://www.trydiscs.com/")

  cy.get(".q-field__input").type("Ace{enter}")

  cy.wait(4000)

  cy.contains('Ace').click()

  cy.wait(4000)

  cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // Quick filter

  cy.wait(3000)

  cy.get('.col-sm-7 > .q-px-sm > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > div.q-pa-none > .q-px-xs > :nth-child(1) > :nth-child(3) > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()

  cy.wait(3000)

  cy.get('.col-sm-7 > .q-px-sm > .q-expansion-item > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(2) > div.q-pa-none > .q-px-xs > :nth-child(1) > :nth-child(1) > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()

  cy.wait(3000)

  cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click() // apply

  cy.wait(3000)

  cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain','1') // check speed

  cy.get('tbody > :nth-child(2) > :nth-child(8)').should('contain','1') // check stability

  cy.get(':nth-child(3) > .text-h6').should('contain','Stability')

  cy.get(':nth-child(4) > .text-h6').should('contain','Speed')

  cy.get('.applied-filters > .row > .cursor-pointer').click()

  cy.get('.col-auto > :nth-child(2) > .q-btn__wrapper').click()

  cy.wait(3000)

  cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > :nth-child(3) > .td-filter').click()

  cy.wait(3000)

  cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(2) > .q-pa-none > .td-brands-wpr > .q-scrollarea__container > .q-scrollarea__content > :nth-child(8) > .td-filter').click()

  cy.wait(3000)

  cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click()

  cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain','Control Driver')

  cy.get(':nth-child(2) > :nth-child(1) > a > .disc-image').should('exist')

  cy.get(':nth-child(2) > :nth-child(1) > .text-h6').should('contain','Type')

  cy.get('.text-subtitle1').should('contain','Innova')

  cy.wait(3000)

  cy.get('.applied-filters > .row > .cursor-pointer').click()

  cy.wait(3000)



  //cy.get('.col-auto > :nth-child(2) > .q-btn__wrapper').click()

 // cy.wait(3000)

 // cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(2) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > .q-pa-none > .q-slider__track-container > .q-slider__track > [style="width: 20px; height: 20px; left: 0%;"] > .q-slider__focus-ring').click()

 // cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(2) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > .q-pa-none > .q-slider__marker-labels-container > [style="left: 27.2727%;"]')
  
})



})