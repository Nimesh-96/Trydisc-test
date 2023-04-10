describe('template spec', () => {
  
  it('Quiz', () => {

    cy.visit('https://staging.trydiscs.com/quiz')

    cy.get('.text-h4').should('contain','DISC RECOMMENDATION QUIZ')
    
    cy.get('.q-btn-group > .bg-primary > .q-btn__wrapper').click()

    cy.get('.col-12 > .q-btn > .q-btn__wrapper').click() // arrow

    cy.wait(2000)

    cy.get(':nth-child(3) > .q-btn__wrapper > .q-btn__content').click() //distace drivers

    cy.get('.col-12 > :nth-child(2) > .q-btn__wrapper').click() // forward

    cy.get('.q-slider__track-container').click()

    cy.wait(2000)

    cy.get('.q-mr-md > .q-btn__wrapper').click() //backward

    cy.wait(2000)

    cy.get('.col-12 > :nth-child(2) > .q-btn__wrapper').click() // forward

    cy.wait(2000)

    cy.get(':nth-child(2) > .q-btn__wrapper > .q-btn__content > .q-icon').click() // forward

    cy.wait(2000)

    cy.get('.q-btn-group > :nth-child(1) > .q-btn__wrapper > .q-btn__content').click() // overstable

    cy.wait(2000)

    cy.get(':nth-child(2) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //forward

    cy.wait(4000)

    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain','Control Driver')

    cy.get(':nth-child(1) > :nth-child(1) > a > .disc-image').click() //brand

    cy.wait(2000)

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > a').click() //disc name

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(2) > div[clickable=""] > .q-btn > .q-btn__wrapper').click() //find

    cy.get(':nth-child(1) > .q-pt-none').click() //iso

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(2) > div[clickable=""] > .q-btn > .q-btn__wrapper').click() //find

    cy.get(':nth-child(1) > .q-pt-none').click() // brand


  })
})