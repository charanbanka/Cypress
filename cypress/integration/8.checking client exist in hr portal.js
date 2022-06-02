describe('HR portal',()=>{
    before(function () {
        cy.fixture('userDetails').then(function (data) {
          this.data = data;
        })
      })
    it('checking client in HR portal',function(){
        cy.visit('https://sso.idfystaging.com/auth?service=https%3A%2F%2Fportal.idfystaging.com%2Fusers%2Fservice&app=hrportal-staging')
        cy.get('#username').should('exist').type(this.data.email)
        cy.get('#password').should('exist').type(this.data.password)
        cy.get('.button').should('exist').click()
        //search client is exist or n
        cy.contains(this.data.company_name).should('be.exist')
    })
})