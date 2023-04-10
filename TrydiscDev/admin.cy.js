describe('template spec', () => {

  it('negativelog', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.co') //invalid email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(4000)
 
    cy.on ('window:alert',function(alertText){
  
     expect(alertText).contain('User not found') //validate alert
    })
 
 
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').clear().type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').clear().type('test.12') //invalid password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(4000)
 
    cy.on ('window:alert',function(alertText){
  
     expect(alertText).contain('Missing or Invalid password') //validate alert
    })
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').clear().type('pradeep@longwapps.co') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').clear().type('test.12') //invalid password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(4000)
 
    cy.on ('window:alert',function(alertText){
  
     expect(alertText).contain('User not found') //validate alert
    })
 
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').clear().type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').clear().type('') //
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(4000)
 
    cy.on ('window:alert',function(alertText){
  
     expect(alertText).contain('User not found') //validate alert
    })
 
   
    
   })

  it('login', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123')
 
    cy.get('.q-btn__wrapper').click()
   
   })
   it('validation', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123')
 
    cy.get('.q-btn__wrapper').click()

    cy.wait(3000)
 
    cy.get(':nth-child(1) > .q-uploader > .q-uploader__header > .q-uploader__header-content').should('be.visible')
 
    cy.get(':nth-child(2) > .q-uploader > .q-uploader__header > .q-uploader__header-content').should('be.visible')
   
    cy.get(':nth-child(3) > .q-uploader > .q-uploader__header > .q-uploader__header-content').should('be.visible')
 
    cy.get('.row.q-card__section').should('be.visible')
 
   })
   
   it('review', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(3000)
 
    cy.get(':nth-child(2) > .q-expansion-item__container > div.q-item > .q-focusable > .q-expansion-item__toggle-icon').click()
  
    cy.get('[href="/admin/iso-tool/reviews"] > .q-item__section').click() // review
 
    cy.wait(2000)
 
    cy.get(':nth-child(1) > :nth-child(6) > :nth-child(1) > .q-toggle > .q-toggle__inner').click()
 
    cy.wait(4000)
 
    cy.on('window:alert',(t)=>{
  
    expect(t).to.contains('Sucessfully update') //validate alert
    })
 
    cy.get('.q-select__dropdown-icon').click() //page count

    cy.wait(2000)
 
    cy.get('.q-menu').click()
 
    cy.get('.q-field__native > span').should('contain','15')
 
   })

   it('sitevisit', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(3000)
 
    cy.get(':nth-child(2) > .q-expansion-item__container > div.q-item > .q-focusable > .q-expansion-item__toggle-icon').click()
 
    cy.get('[href="/admin/iso-tool/site-visits"]').click()

    cy.wait(2000)
 
    cy.get('[data-v-03169259=""] > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click()//date
 
    //cy.get('#f_89fb31e5-5b1a-48be-a30c-f85fb7587893_1 > .q-item__section > .q-item__label').click()
    
    cy.get('.q-btn__wrapper').click()
 
    cy.wait(5000)
 
    cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click() //page count
  
    cy.get('.q-menu').click()
 
    cy.get('.q-field__native > span').should('contain','20')
 
    
   })

   it('urls', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(3000)
 
    cy.get(':nth-child(2) > .q-expansion-item__container > div.q-item > .q-focusable > .q-expansion-item__toggle-icon').click()
 
    cy.get('[href="/admin/iso-tool/urls"]').click() //URLs
 
    cy.wait(2000)
 
    cy.get(':nth-child(4) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //next page
 
    cy.wait(2000)
 
    cy.get(':nth-child(5) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //last page
 
    cy.wait(2000)
 
    cy.get(':nth-child(3) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //prev page
 
    cy.wait(2000)
 
    cy.get(':nth-child(3) > :nth-child(2) > .q-btn__wrapper > .q-btn__content > .q-icon').click() //first page
  
    cy.wait(2000)
    
    cy.get('.q-select__dropdown-icon').click()
 
    cy.get('.q-menu').click()
  
    cy.get('.q-field__native > span').should('contain','20')
 
    cy.get('.q-table__top > .q-btn > .q-btn__wrapper').click() //add new url
 
    cy.get('.url-dialog').should('be.visible')

    cy.wait(4000)
 
    cy.get('.row.q-card__section > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() //cancel
 
    cy.wait(4000)

    cy.get(':nth-child(1) > .text-right > div > .q-mr-xs > .q-btn__wrapper > .q-btn__content > .q-icon').click() //edit requst
 
    cy.get('.row.q-card__section').should('be.visible')

    cy.wait(4000)
 
    cy.get('.q-card__actions > :nth-child(2) > .q-btn__wrapper').click() //cancel
 
   })
   it('sitevisit', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(3000)
 
    cy.get(':nth-child(4) > .q-expansion-item__container > div.q-item').click()
 
    cy.get(':nth-child(4) > .q-expansion-item__container > .q-expansion-item__content > .q-list > .q-item').click()//site visit
 
    cy.wait(2000)
 
    cy.get('.q-btn__wrapper').click() //download csv
 
    cy.wait(4000)
 
    cy.get('.q-select__dropdown-icon').click()
 
    cy.wait(2000)
  
    cy.get('.q-menu').click()
   
    cy.get('.q-field__native > span').should('contain','20')
 
   })

   it('Analatical tool', () => {

    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com') //email
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123') // password
 
    cy.get('.q-btn__wrapper').click() //sign in
 
    cy.wait(8000)
 
    cy.get('[href="/admin/analytics/iso-tool"]').click() //analatical tool
 
    cy.get(':nth-child(1) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Total Clicks')
 
    cy.get(':nth-child(2) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Total Impressions')
   
    cy.get(':nth-child(3) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Average CTR')
 
    cy.get(':nth-child(4) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Average Position')
 
    cy.get(':nth-child(5) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Avg Results Per Search')
   
    cy.get(':nth-child(6) > .cardDashboard > .q-pb-none > .text-subtitle1').should('contain','Avg Clicks Per Search')
 
    cy.get(':nth-child(1) > .q-table__container > .q-table__top > .text-h6').should('contain','Top searches')
 
    cy.get(':nth-child(3) > .q-table__container > .q-table__top > .text-h6').should('contain','Most searches with no impressions - Your biggest opportunities')
 
    cy.get('.dateRangeSelect > label').click()

    
 
 
 
   })

   it('bid', () => {
    
    cy.visit('https://dev.trydiscs.com/admin')
 
    cy.wait(3000)
 
    cy.get('.q-btn__wrapper').should('be.visible')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(1) input').type('pradeep@longwapps.com')
 
    cy.get('.q-card > :nth-child(2) > :nth-child(2) input').type('test.123')
 
    cy.get('.q-btn__wrapper').click()

    cy.wait(3000)

    cy.get(':nth-child(3) > .q-expansion-item__container > div.q-item > .q-focusable > .q-expansion-item__toggle-icon').click() //retailer

    cy.get('[href="/admin/retailer/bidding-info"]').click() // bidding info

    cy.wait(2000)

    cy.get("table[class='q-table']>tbody>tr").should('have.length','12');

    cy.get("table[class='q-table']>tbody>tr")
      .each(($row, index, $rows)=>{

        cy.wrap($row).within( ()=>{

          cy.get("td").each(($col, index, $cols)=>{
            cy.log($col.text())

          })
        } )
      } )

      cy.get('.q-table__top').should('contain','Bidding Info')

      cy.get('.q-select__dropdown-icon').click() // click on dropdown

      cy.get('.q-menu>.q-virtual-scroll__content>:nth-child(3)').click() //select 10

      cy.get(':nth-child(3) > .q-btn--actionable > .q-btn__wrapper > .q-btn__content').click() //next page

      cy.get(':nth-child(3) > .q-btn--actionable > .q-btn__wrapper > .q-btn__content > .q-icon').click() //previous page
  
      cy.get("table[class='q-table']>tbody>tr").should('have.length','10'); //col validation

      cy.get('.q-select__dropdown-icon').click() // click on dropdown

      cy.get('.q-menu>.q-virtual-scroll__content>:nth-child(2)').click() //select 10

      cy.get("table[class='q-table']>tbody>tr").should('have.length','7'); //col validation

      cy.get(':nth-child(1) > :nth-child(4) > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() // click on arrow

      cy.get('.bidInfo-dialog').should('be.visible') //visible card

      cy.get('.q-pt-md > .q-pa-none').should('contain','Retailer name') //validate retailer name

     cy.get('.q-card__section>:nth-child(2)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(2000) // set monthly budget

     cy.get('.bg-primary > .q-btn__wrapper').click() //save

     cy.wait(2000)

     cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain','2000')

     cy.wait(2000)

     cy.get(':nth-child(1) > :nth-child(4) > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() // click on arrow

     cy.get('.q-card__section>:nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(100) // set max bid
    
     cy.get('.bg-primary > .q-btn__wrapper').click() //save

     cy.wait(2000)

     cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain','100')


     cy.get(':nth-child(1) > :nth-child(4) > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() // click on arrow

     cy.get('.q-card__section > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click() // close card

     cy.get(':nth-child(2) > :nth-child(4) > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()  // select pirete disc(2nd retailer)

     cy.get('.q-card__section>:nth-child(2)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(0) // set monthly budget

     cy.get('.bg-primary > .q-btn__wrapper').click() //save

     cy.wait(2000)

     cy.get(':nth-child(3) > :nth-child(4) > div > .q-btn > .q-btn__wrapper > .q-btn__content > .q-icon').click()  // select bang disc(3rd retailer)

     cy.get('.q-card__section>:nth-child(3)>.q-field>.q-field__inner>.q-field__control>.q-field__control-container>.q-field__native').clear().type(0) // set max bid

     cy.get('.bg-primary > .q-btn__wrapper').click() //save

     cy.wait(2000)

     cy.on('window:alert',(t)=>{
  
      expect(t).to.contains('Bid value must be atleast 0.01 usd') //validate alert
      })

      cy.get('[href="/admin/retailer/payment-history"]').click() //payement history

      cy.wait(2000)

      cy.get('.dateRangeSelect').click() //select date

      cy.wait(2000)

      cy.get('.q-virtual-scroll__content>:nth-child(2)').click() //select yesterday

      cy.get(':nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click() // pagination dropdown

      cy.get('.q-menu>.q-virtual-scroll__content>:nth-child(2)').click() //set 7 pages

      cy.get("table[class='q-table']>tbody>tr").should('have.length.lessThan',8); //col validation

      cy.get('.dateRangeSelect').click() //selesct date

      cy.wait(2000)

      cy.get('.q-virtual-scroll__content>:nth-child(5)').click() //select custom date

      cy.get(':nth-child(1) > .q-date > .q-date__main > .q-date__content > .q-date__view > .q-date__calendar-days-container > .q-date__calendar-days > :nth-child(7) > .q-btn > .q-btn__wrapper > .q-btn__content').click()

      cy.get(':nth-child(2) > .q-date > .q-date__main > .q-date__content > .q-date__view > .q-date__calendar-days-container > .q-date__calendar-days > :nth-child(13) > .q-btn > .q-btn__wrapper > .q-btn__content').click()

      cy.get('.bg-positive > .q-btn__wrapper').click()
      
      cy.visit('https://dev.trydiscs.com/iso-search?q=disc&country=all')

      cy.wait(100000)

      cy.get('.col-12>.col>.row').should('not.contain','pirete')

  })


})