describe('Auto account provisioning',()=>{
    before(function () {
      cy.fixture('userDetails').then(function (data) {
        this.data = data;
      })
    })
    it('when form fields are miss to fill', function () {
      cy.visit('https://portal.idfystaging.com/signup/account')
      cy.get('#signupform').should('exist')
      cy.get('#full_name').should('exist').type(this.data.name)
      cy.get('#email').should('exist').type(this.data.email)
      cy.get('#company_name').should('exist').type(this.data.company_name)
      cy.get('#no_of_emp').select('0-50').should('have.value','0-50')
      cy.get('#mobile_no').should('exist').type(this.data.ph_no, { force: true })
      cy.get('.formWrapper').should('exist').click()
      cy.get('#btn-register').should('exist').should('not.be.disabled').click()
      cy.visit('https://portal.idfystaging.com/signup/password')
      cy.get('#passwordform').should('exist')
      cy.get('#password').should('exist').type(this.data.password)
      cy.get('#password_confirm').should('exist').type(this.data.password)
      cy.get('.formWrapper').should('exist').click()
      cy.get('#getStarted').should('exist').click()

      //login page
      cy.get('#username').should('exist').type(this.data.email)
      cy.get('#password').should('exist').type(this.data.password)
      cy.get('.button').should('exist').click()
   })
  
   })