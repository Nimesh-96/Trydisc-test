describe('template spec', () => {
  
   it('pagevalidation', () => {

    cy.visit("https://www.dev.trydiscs.com/disc-golf-retailers")
  
    cy.wait(3000)
  
    cy.get('.q-field__prepend > .country-flag').should('be.visible') // flag
  
    cy.get('.col-sm-2.q-pa-sm').should('contain','Search') // search button
  
    cy.get('.q-field__append > .text-primary').click()
  
    cy.get('.q-manual-focusable--focused > .q-item__section--avatar > .country-flag').should('be.visible')
  
    cy.get('[urlid="7"] > .item-inner > .q-py-none > .dialoga > .disc-image').should('be.visible')

    cy.get('[urlid="233"] > .item-inner > .col-sm-auto > .q-my-auto > .q-px-md > .country-flag').scrollIntoView({duration:3000})
  
  })

  it('Filters', () => {

    cy.visit("https://www.dev.trydiscs.com/disc-golf-retailers")

    cy.wait(3000)

    cy.get(':nth-child(2) > :nth-child(1) > .q-btn__wrapper').click()

    cy.get(':nth-child(7) > .q-item__section--side > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg').click() //select california

    cy.get('[urlid="19"] > .item-inner > .col-sm-auto > .q-my-auto > :nth-child(2)').should('contain','California')

    cy.get('small').should('be.visible')
  
    cy.wait(2000)
   
    cy.get(':nth-child(8) > .q-item__section--side > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg').click() //select colorado

    cy.wait(2000)
    
    cy.get(':nth-child(64) > .q-item__section--main > span').scrollIntoView({duration:2000}) //scroll location filter

    cy.get(':nth-child(64) > .q-item__section--main > span').should('be.visible')

    cy.get('small').click() // clear all

    cy.wait(2000)

    cy.get(':nth-child(2) > .q-btn__wrapper > .q-btn__content > .block').click() //select exct disc

    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click() //select yes

    cy.get('[urlid="7"] > .item-inner > .iso-col-2 > :nth-child(1) > .q-ma-none > .text-black').should('contain','Yes')

    cy.wait(2000)
    
    cy.get('small').click() // clear all

    cy.wait(2000)

    cy.get(':nth-child(2) > .q-btn__wrapper > .q-btn__content > .block').click() //select exct disc

    cy.get(':nth-child(2) > .q-radio > .q-radio__inner').click() //select no

    cy.get('[urlid="35"] > .item-inner > .iso-col-2 > :nth-child(1) > .q-ma-none > .text-black').should('contain','No')

    cy.wait(2000)
   
    cy.get('small').click() // clear all

    cy.wait(2000)
   
    cy.get(':nth-child(3) > .q-btn__wrapper').click()

    cy.get(':nth-child(2) > .q-radio > .q-radio__inner').click()

    cy.get('[urlid="60"] > .item-inner > .iso-col-2 > :nth-child(2) > .q-px-sm > .row').should('contain','Calculated at Checkout')    

    cy.wait(2000)
   
    cy.get('small').click()

    cy.wait(2000)

    cy.get(':nth-child(3) > .q-btn__wrapper').click()

    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click()

    cy.get('[urlid="7"] > .item-inner > .iso-col-2 > :nth-child(2) > .q-px-sm > .row').should('contain','Free shipping')
   
    cy.get(':nth-child(4) > .q-btn__wrapper').click()

    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click()

    cy.wait(2000)

    cy.get('small').click()

    cy.wait(2000)

    cy.get(':nth-child(5) > .q-btn__wrapper').click()

    cy.get('.q-slider__track-container').click()

  
  })

  it('retailersearch', () => {

    cy.visit("https://www.dev.trydiscs.com/disc-golf-retailers")

    cy.wait(3000)

    cy.get('.col-sm-5').type("disc")

    cy.get('.col-sm-2.q-pa-sm').click()

    cy.wait(3000)

    cy.get(':nth-child(2) > :nth-child(1) > .q-btn__wrapper').should('be.visible')

    cy.get('.q-field__prepend > .country-flag').should('be.visible')

    cy.get('.q-field__append > .text-primary').click()

    cy.get(':nth-child(3) > .q-item__section--main > div').click()

    cy.get('.q-field__prepend > .country-flag').should('be.visible')

    cy.get('.q-field__append > .text-primary').click()

    cy.get(':nth-child(2) > .q-item__section--main > div').click()

    cy.get('.q-field__append > .text-primary').click()

    cy.get(':nth-child(5) > .q-item__section--main > div').click()

    cy.get('.q-field__append > .text-primary').click()

    cy.get(':nth-child(1) > .q-item__section--main > div').click()

    cy.get('.q-field__append > .text-primary').click()

    cy.get('.col-sm-5').clear().type('united')

    cy.get('.col-sm-2.q-pa-sm').click()

    cy.wait(3000)

    cy.get(':nth-child(2) > :nth-child(1) > .q-btn__wrapper').should('be.visible')

  })

  it('links', () => {

    cy.visit("https://www.dev.trydiscs.com/disc-golf-retailers")

    cy.wait(3000)

    cy.get('[urlid="7"] > .absolute-top > .q-my-none > .q-avatar > .q-avatar__content > .q-icon').click()

    cy.get('.q-list > :nth-child(2)').click() // flag incorrect

    cy.get('.q-list > :nth-child(2)').click() // update store

    cy.get('.bg-negative > .q-btn__wrapper').click() //cancel

  })

  
})