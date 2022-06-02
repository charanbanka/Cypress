describe('first test case',()=>{
    before(function () {
        cy.fixture('userDetails').then(function (data) {
          this.data = data;
        })
      })
    it.only('checking client in Invoice portal',function (){
        cy.visit('https://ops.dc.idfystaging.com/?client_id=idfy-ops')
        cy.get('#username').should('exist').type(this.data.manager_uname)
        cy.get('#password').should('exist').type(this.data.manager_pwd)
        cy.get('#kc-login').should('exist').click()

        cy.visit('https://invoicing.dc.idfystaging.com/')
        cy.get('.sidebar-menu > :nth-child(2) > a > .fa').should('exist').click()
        cy.get('.col-md-6 > #search').type(this.data.company_name)
        cy.get('.col-md-2 > .btn').click()
        cy.get('.nav > :nth-child(3) > a').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    })
})