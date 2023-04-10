describe('template spec', () => {
    it('tools short cut', () => {
      
      cy.visit("https://www.trydiscs.com/")
    
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(1)').click()
  
      cy.get(':nth-child(4) > :nth-child(1) > .q-pa-md > .q-mt-none').should('have.text','Recommendation Engine')
     
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(3)').click()
  
      cy.get(':nth-child(4) > :nth-child(2) > .q-pa-md > .q-mt-none').should('contain','ISO Disc Finder')
  
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(5)').click()
  
      cy.get(':nth-child(5) > :nth-child(1) > .q-pa-md > .q-mt-none').should('contain','Advanced Disc Search')
  
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(7)').click()
  
      cy.get(':nth-child(5) > :nth-child(2) > .q-pa-md > .q-mt-none').should('contain','Disc Golf Stores')
  
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(9)').click()
  
      cy.get('.col-lg-6 > .q-pa-md > .q-mt-none').should('contain','Disc Flight Matrix')
  
      cy.get('.q-my-auto > .q-btn > .q-btn__wrapper').click()
  
      cy.get('.q-list > :nth-child(11)').click()
  
      cy.get(':nth-child(6) > :nth-child(2) > .q-pa-md > .q-mt-none').should('contain','Out of Production Tracker')
  
    })
  
    it('Shortcuts', () => {
  
      cy.visit("https://www.trydiscs.com/")
      
      cy.get(':nth-child(3) > .bg-primary > .q-btn__wrapper').click()
  
      cy.get(':nth-child(4) > :nth-child(1) > .q-pa-md > .q-mt-none').should('have.text','Recommendation Engine')
  
      cy.get('div.q-mr-md-xl > :nth-child(3) > .q-mr-md-none > .q-btn__wrapper').click()
  
      cy.get(':nth-child(4) > :nth-child(2) > .q-pa-md > .q-mt-none').should('contain','ISO Disc Finder')
  
      cy.get(':nth-child(4) > .bg-warning > .q-btn__wrapper').click()
  
      cy.get(':nth-child(5) > :nth-child(1) > .q-pa-md > .q-mt-none').should('contain','Advanced Disc Search')
  
      cy.get(':nth-child(4) > .bg-deep-orange > .q-btn__wrapper')
  
      cy.get(':nth-child(5) > :nth-child(2) > .q-pa-md > .q-mt-none').should('contain','Disc Golf Stores')
  
      cy.get(':nth-child(4) > .bg-deep-orange > .q-btn__wrapper')
  
      cy.get('.col-lg-6 > .q-pa-md > .q-mt-none').should('contain','Disc Flight Matrix')
    })
  
    it('links', () => {
  
      cy.visit("https://www.trydiscs.com/")
      
    cy.get('.q-carousel__slide > :nth-child(1) > :nth-child(1) > .rounded-borders > .q-img__content').click()
  
    cy.wait(3000)
      // need to validate
  
     //cy.get('.q-panel.q-transition--fade-enter-active > .q-carousel__slide > :nth-child(2) > :nth-child(2) > .rounded-borders > .q-img__content').click()
     
     cy.wait(3000)
  
     cy.get(':nth-child(1) > :nth-child(3) > .dialoga > .rounded-borders > .q-img__content').click()
  
     cy.wait(2000)
  
     cy.get(':nth-child(2) > a > img').click()
  
     cy.wait(3000)
  
     cy.get('.q-mr-md > .q-img__content').click()
  
     cy.wait(2000)
  
     cy.get('.q-pa-md > .q-img__content').click()
     
     //cy.get(':nth-child(14) > .col-md-12 > :nth-child(1) > .col-auto').click()
  
    })
  
  })