describe('template spec', () => {
  it('validation', () => {

    it('homepage', () => {

      cy.visit('https://staging.trydiscs.com/')
   
      cy.wait(3000)
   
      cy.get('.col-sm-9 > .q-field > .q-field__inner > .q-field__control').type('challenger')
   
      cy.get(':nth-child(2) > .q-pa-md > .q-mb-md > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click() //type
     
      cy.wait(8000)
   
      cy.go('back')
   
      cy.wait(3000)
   
      cy.get(':nth-child(2) > .q-pa-md > :nth-child(7) > a.cursor-pointer > .q-ma-none').click() //recent search
   
      cy.wait(8000)
   
      cy.get('.col-sm-9 > .q-field > .q-field__inner > .q-field__control').type('destroyer')
   
      cy.get('.q-px-none > .q-field > .q-field__inner > .q-field__control > .q-field__append > .text-primary').click()
   
      cy.get('.q-manual-focusable--focused > .q-item__section--avatar > .country-flag').click()
   
      cy.get(':nth-child(2) > .q-pa-md > .q-mb-md > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click() //search
     
      cy.wait(8000)
   
      cy.go('back')
   
      cy.wait(3000)
   
      cy.get('.col-sm-9 > .q-field > .q-field__inner > .q-field__control').type('Destroyer AND Buzzz')
   
      cy.get(':nth-child(2) > .q-pa-md > .q-mb-md > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click() //search
   
      cy.wait(8000)
   
      cy.go('back')
   
      cy.wait(3000)
   
      cy.get('.col-sm-9 > .q-field > .q-field__inner > .q-field__control').type('Leopard3 OR Leopard 3')
   
      cy.get(':nth-child(2) > .q-pa-md > .q-mb-md > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click() //search
     
      cy.wait(8000)
   
      cy.go('back')
   
      cy.wait(3000)
   
      cy.get('.col-sm-9 > .q-field > .q-field__inner > .q-field__control').type('Truth NOT eMac')
   
      cy.get(':nth-child(2) > .q-pa-md > .q-mb-md > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click() //search
     
   
     })

    cy.visit('https://staging.trydiscs.com/iso-search?q=ace&country=us')//visit site

    cy.wait(200000)

    cy.get('.text-center.col-12 > .text-primary').scrollIntoView({duration:3000})

    cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() //page up

    cy.wait(1000)

    cy.get('.col-xs-12.q-mb-md > .col-xs-12').should('be.visible')

    cy.get('.q-field__prepend > .country-flag').should('be.visible')

  })

  it('discsearch', () => {

    cy.visit('https://staging.trydiscs.com/iso-search?q=ace&country=us')
 
    cy.wait(200000)
 
    cy.get('[urlid="35"] > .q-mr-sm > .q-py-none > .q-btn > .q-btn__wrapper > .q-btn__content > .dialoga > .disc-image').click()
 
    cy.wait(3000)
 
    cy.get('[urlid="35"] > .q-mr-sm > .col-sm-auto > .q-mb-sm-none > .q-mb-sm > .dialoga > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
 
    cy.get('.q-field__append > .text-primary').click()
 
    cy.get(':nth-child(1) > .q-item__section--avatar').click() // change into all country
 
    cy.get('.col-sm-2.q-pa-sm').click()
 
    cy.wait(200000)
 
    cy.get('.col-sm-5').type(' or hex')
 
    cy.get('.col-sm-2.q-pa-sm').click() //search
 
    cy.wait(200000)
 
    cy.get('.q-field__append > .text-primary').click() // country filter
 
    cy.get(':nth-child(2) > .q-item__section--avatar').click() // select country
 
    cy.get('.col-sm-2.q-pa-sm').click() //search
 
    cy.get('[urlid="191"] > .q-mr-sm > .col-sm-auto > .q-mb-sm-none > .q-mb-sm > .q-btn > .q-btn__wrapper').click()
   
    cy.wait(200000)
 
    cy.get('.keywordsList').should('be.visible')
 
 
    cy.get('.col-sm-5').clear().type('ace and hex') //type names
 
    cy.get('.q-field__append > .text-primary').click() // country filter
 
    cy.get(':nth-child(1) > .q-item__section--avatar').click() // select country

    cy.wait(10000)
 
    cy.get('.col-sm-2.q-pa-sm').click() //search
 
    cy.get('[urlid="7"] > .q-mr-sm > .col-sm-auto > .q-mb-sm-none > .q-mb-sm > .q-btn > .q-btn__wrapper').click()
 
    cy.get('.keywordsList').should('be.visible')
 
 
   })

   it('filters', () => {

    cy.visit('https://staging.trydiscs.com/iso-search?q=ace&country=us')
 
    cy.wait(3000)
 
    cy.get(':nth-child(2) > :nth-child(1) > .q-btn__wrapper').click() //locatin filter
 
    cy.get(':nth-child(6) > .q-item__section--side > .q-checkbox > .q-checkbox__inner').click()
 
    cy.wait(3000)
 
    cy.get(':nth-child(2) > .q-btn__wrapper').click() //exact disc
 
    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click()
 
    cy.wait(3000)
 
   cy.get ('small').click() //clear
 
    cy.wait(3000)
 
    cy.get(':nth-child(3) > .q-btn__wrapper').click() //free shipping
 
    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click()
 
    cy.wait(3000)
 
    cy.get(':nth-child(4) > .q-btn__wrapper').click()
 
    cy.get(':nth-child(1) > .q-radio > .q-radio__inner').click()
 
    cy.wait(3000)
 
    cy.get ('small').click() //clear
  
     cy.wait(3000)
 
   })

   
  it('links', () => {

    cy.visit('https://staging.trydiscs.com/iso-search?q=ace&country=us')
 
    cy.wait(3000)
 
    cy.get('.q-btn__content > .q-icon').click()
 
    cy.get('.q-item').click() //additnal request
 
    cy.get('.my-card').should('be.visible')
 
    cy.get('.bg-negative > .q-btn__wrapper').click() //cancel
 
   /* cy.get('[urlid="7"] > .absolute-top > .q-my-none > .q-avatar > .q-avatar__content').click() //3 dot
 
    cy.get('.q-list > :nth-child(1)').click() //update request
 
    cy.get('.q-img__content').should('be.visible')
 
    cy.get('.q-card__section > .q-field > .q-field__inner > .q-field__control').type('test') //comment
 
    cy.get('.q-card__actions > .bg-primary > .q-btn__wrapper').click()
 
    cy.on ('window:alert',function(alertText){
 
     expect(alertText).contain('Thank you for letting us know.We will investigate') //validate alert
    })
 
    cy.get('[urlid="35"] > .absolute-top > .q-my-none > .q-avatar > .q-avatar__content').click() //3 dot menu
 
    cy.get('.q-list > :nth-child(2)').click() //flag incorrect
 
    cy.on ('window:alert',function(alertText){
 
     expect(alertText).contain('Thank you for letting us know.We will investigate') //validate alert
    })

  })

  it('review', () => {

    cy.visit('https://dev.trydiscs.com/iso-search?q=ace&country=us')
 
    cy.wait(3000)
 
    cy.get('[urlid="7"] > .q-mr-sm > .iso-col-2 > :nth-child(4) > .col-12 > .justify-center > .q-pt-none').click()//review
 
    cy.get('.justify-between > .q-rating > :nth-child(5) > .q-icon').click() //5 star
 
    cy.get('.q-mb-md > .q-field__inner > .q-field__control').type('tets@gmail.com') //mail
 
    cy.get('.q-textarea > .q-field__inner > .q-field__control').type('automation test') //review
 
    cy.get('.justify-between > .q-btn > .q-btn__wrapper').click() //submit
 
    cy.on ('window:alert',function(alertText){
  
     expect(alertText).contain('Thank you for your feedback') //validate alert
     })
 
    */   })


    it('simbol search', () => {

      cy.visit('https://staging.trydiscs.com/iso-search?q=ace&country=us')
   
      cy.wait(3000)
   
      cy.get('.q-field__control-container > .q-placeholder').clear().type('@#')
   
      cy.get('.q-pa-sm > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
   
      cy.wait(5000)
   
      cy.get('.q-field__control-container > .q-placeholder').clear().type(' ')
   
      cy.get('.q-pa-sm > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
   
      
     })
   

})