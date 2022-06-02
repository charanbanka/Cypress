
describe('Auto account provisioning',()=>{
  before(function () {
    cy.fixture('userDetails').then(function (data) {
      this.data = data;
    })
  })
  it('when form fields are wrong format', function () {
    cy.visit('https://portal.idfystaging.com/signup/account')
    cy.get('#signupform').should('exist')
    cy.get('#full_name').should('exist').type(this.data.name)
    cy.get('#email').should('exist').type("banka@idfy")
    cy.get('#no_of_emp').select('0-50').should('have.value','0-50')
    cy.get('#mobile_no').should('exist').type(this.data.ph_no, { force: true })
    cy.get('.formWrapper').should('exist').click()
 })

 })