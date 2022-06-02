describe('Court check',()=>{
    before(function () {
        cy.fixture('userDetails').then(function (data) {
          this.data = data;
        })
      })
    it('checking client in HR portal',function(){
        cy.visit('http://court-checks.idfystaging.com/')
        cy.get('#user_email').should('exist').type('charan.banka@idfy.com')
        cy.get('#user_password').should('exist').type('Password@123')
        cy.get('.btn').should('exist').click()
        //search client is exist or not
        cy.get('.nav > :nth-child(2) > a').click()
        cy.get('#q_name_cont').type(this.data.company_name)
        cy.get('.col-md-1 > .btn').click()
        cy.get('tr > :nth-child(1) > a').should('exist').click()
    })
})