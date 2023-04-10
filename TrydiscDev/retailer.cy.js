describe('template spec', () => {
  it('validation', () => {
    cy.visit('https://dev.trydiscs.com/retailer')

    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('nimesh@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('123456')
 
    cy.get('.q-btn__wrapper').click()

    cy.get(':nth-child(1) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Total clicks')

   cy.get(':nth-child(2) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Total impressions')
  
   cy.get(':nth-child(3) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Average CTR')

   cy.get(':nth-child(4) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Average Position')
  
   

   cy.get(':nth-child(4) > .q-table__container > .q-table__top > .text-h6').should('contain','Top searches')

   cy.get(':nth-child(5) > .q-table__container > .q-table__top > .text-h6').should('contain','Most searches with no impressions - Your biggest opportunities')
 
    cy.wait(3000)

  })

  it('update', () => {
    cy.visit('https://dev.trydiscs.com/retailer')

    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('nimesh@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('123456')
 
    cy.get('.q-btn__wrapper').click()

    cy.wait(3000)

    cy.get('[href="/retailer/edit-store-information"]').click() //update

    cy.wait(3000)

    cy.get('.q-toggle__inner').click() // exact disc

    cy.wait(3000)

    cy.get('.q-btn__content').click() //save

  })

  it('promote story', () => {
    
    cy.visit('https://dev.trydiscs.com/retailer')

    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('bang@yopmail.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('123456')
 
    cy.get('.q-btn__wrapper').click()

    cy.wait(3000)

    cy.get('[href="/retailer/promote-your-store"] > .q-item__section').click() //promote store

    cy.get('.row>:nth-child(2)>.q-pt-lg>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(500) //set monthly budget

    cy.get('.row>:nth-child(3)>.q-pt-lg>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(2) //set max bid

    cy.get('.item > .q-pa-md').click() //add card

    cy.wait(2000)

    cy.get('.q-px-md > .item > .q-card__section').click() // add card

    cy.get('.q-card>.row>:nth-child(3)>.q-field__inner').type(4242424242424242) // type card number

    cy.get('.q-card>.row>:nth-child(4)>.q-field__inner').type(123) // type cvc

    cy.get('.q-card>.row>:nth-child(5)>.q-field__inner').type(1125) //type date

    cy.wait(2000)

    cy.get('.bg-primary > .q-btn__wrapper > .q-btn__content').click() //save

    cy.wait(2000)

    cy.get('.q-btn__content > .q-icon').click() // close

   cy.get(':nth-child(1) > .q-pt-md > .row > .text-subtitle2').click() //make payement

    cy.get('.q-select > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()

    cy.get('.q-menu>:nth-child(2)').click() //select card

    cy.get('.row>:nth-child(3)>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(0.5) // 

    cy.get('.bg-primary > .q-btn__wrapper > .q-btn__content').click() // pay

    cy.wait(2000)

    cy.get(':nth-child(2) > .q-pt-md > .row > .text-subtitle2').click() //paymen history

    cy.get('.dateRangeSelect > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click()//date

    cy.get('.q-menu>:nth-child(2)>:nth-child(3)').click() // select last 3 months

    cy.get('.q-table__bottom > :nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click() //pagenation

    cy.get('.q-menu>:nth-child(2)>:nth-child(2)').click() // select 5

    cy.get(':nth-child(4) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //next

    cy.get('.absolute-top-right > .q-btn__wrapper > .q-btn__content').click() //


    })

})