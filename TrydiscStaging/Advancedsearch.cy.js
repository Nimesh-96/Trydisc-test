describe('template spec', () => {
  it('pagevalidation', () => {

    cy.visit("https://www.staging.trydiscs.com/advanced-search")
    
    cy.get('.text-h4').should('contain','ADVANCED DISC SEARCH') // title

    cy.get("table[class='q-table']>tbody>tr").should('have.length','25');

    cy.get("table[class='q-table']>tbody>tr")
      .each(($row, index, $rows)=>{

        cy.wrap($row).within( ()=>{

          cy.get("td").each(($col, index, $cols)=>{
            cy.log($col.text())

          })
        } )
      } )


    cy.get('thead > .q-tr > :nth-child(1)').should('contain','BRAND') //table col name

    cy.get('tbody > :nth-child(1) > :nth-child(1) > .disc-image').should('be.visible')

    cy.get('.full-width').click() // back to home page

    cy.url().should('eq','https://www.staging.trydiscs.com/') // home page url validation

  })

  it('test', () => {

    cy.visit("https://www.staging.trydiscs.com/advanced-search")

    cy.get('[style=""] > .q-pagination > :nth-child(3) > .q-btn__wrapper > .q-btn__content > .block').should('contain','1')

    cy.get(':nth-child(1) > :nth-child(1) > .flex > .q-pagination > div.row > :nth-child(1) > .q-btn__wrapper > .q-btn__content').click() // 2nd page

    cy.wait(3000)
    cy.get('[style=""] > .q-pagination > div.row > :nth-child(1) > .q-btn__wrapper > .q-btn__content > .block').should('contain','2')

    cy.get(':nth-child(1) > :nth-child(1) > .flex > .q-pagination > :nth-child(7) > .q-btn__wrapper > .q-btn__content > .q-icon').click() // next page

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(1) > .flex > .q-pagination > :nth-child(8) > .q-btn__wrapper > .q-btn__content > .q-icon').click() // last page

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(1) > .flex > .q-pagination > :nth-child(2) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //previous page

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(1) > .flex > .q-pagination > :nth-child(1) > .q-btn__wrapper > .q-btn__content > .q-icon').click() // first page

    cy.get('[style=""] > .q-pagination > :nth-child(3) > .q-btn__wrapper > .q-btn__content > .block').should('contain','1')
    
  })

  it('test', () => {

    cy.visit("https://www.staging.trydiscs.com/advanced-search")

    cy.wait(3000)

    cy.get(':nth-child(2) > :nth-child(1) > a > .disc-image').click() // brand logo

    cy.wait(3000)

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > a').click() //disc name

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .q-badge').click() //find

    cy.wait(3000)

    cy.get('.findAtDialog > .q-card__section').should('be.visible')

    cy.get(':nth-child(1) > .q-pt-none').should('contain','FIND AT')

    cy.get('.q-pt-none > .disc-image').should('be.visible')

    cy.get(':nth-child(1) > .q-pt-none').click() //iso

    cy.wait(3000)

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .q-badge').click() //find

    cy.wait(3000)

    cy.get(':nth-child(2) > .q-pt-none').click() // find at

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .q-badge').click() //find

    cy.wait(3000)
  
  })


  it('Filters', () => {
    
    cy.visit("https://www.staging.trydiscs.com/advanced-search")
  
    cy.wait(4000)
  
    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // Quick filter
  
    cy.wait(3000)
  
    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > :nth-child(3) > .td-filter').click() // select control drivers
   
    cy.wait(3000)
   
    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click()
  
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain','Control Driver')
  
    cy.get(':nth-child(2) > :nth-child(1) > a > .disc-image').should('exist') //logo validation
  
    cy.get(':nth-child(2) > :nth-child(1) > .text-h6').should('contain','Type') // column name validation

    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // filter
  
    cy.wait(3000)

    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(2) > .q-pa-none > .td-brands-wpr > .q-scrollarea__container > .q-scrollarea__content > :nth-child(8) > .td-filter').click() //select innova
  
    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click()
  
    cy.get('.text-subtitle1').should('contain','Innova') // retailer validation
  
    cy.wait(3000)
  
    cy.get('.applied-filters > .row > .cursor-pointer').click() // clear all

    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // Quick filter
  
    cy.wait(3000)
  
    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > :nth-child(2) > .td-filter').click() // select control drivers
   
    cy.wait(3000)
   
    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click()
  
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain','Putt & Approach')

    cy.wait(3000)

    cy.get('.col-auto > :nth-child(1) > .q-btn__wrapper').click() // filter
  
    cy.wait(3000)

    cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(1) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(2) > .q-pa-none > .td-brands-wpr > .q-scrollarea__container > .q-scrollarea__content > :nth-child(2) > .td-filter').click()

    cy.get('.q-py-sm > .q-btn > .q-btn__wrapper').click()
  
    cy.get('.text-subtitle1').should('contain','Discraft') // retailer validation
  
    cy.wait(3000)
  


  
    //cy.get('.col-auto > :nth-child(2) > .q-btn__wrapper').click()
  
   // cy.wait(3000)
  
   // cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(2) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > .q-pa-none > .q-slider__track-container > .q-slider__track > [style="width: 20px; height: 20px; left: 0%;"] > .q-slider__focus-ring').click()
  
   // cy.get('.col-sm-7 > .q-mb-auto > :nth-child(2) > .q-list > :nth-child(2) > .q-expansion-item__container > .q-expansion-item__content > .q-card > :nth-child(1) > .row > .q-pa-none > .q-slider__marker-labels-container > [style="left: 27.2727%;"]')
    
  })
  

  


})