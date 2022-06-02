describe('first test case',()=>{
    before(function () {
        cy.fixture('userDetails').then(function (data) {
          this.data = data;
        })
      })
    it('checking client exist in Adressify portal',function(){
        cy.visit('https://ops.dc.idfystaging.com/?client_id=idfy-ops')
        cy.get('#username').should('exist').type(this.data.manager_uname)
        cy.get('#password').should('exist').type(this.data.manager_pwd)
        cy.get('#kc-login').should('exist').click()

        cy.visit('https://address.dc.idfystaging.com/clients')
        cy.get('.slide_toggler').click()
        cy.get('.btn').should('exist').click()

        cy.visit('https://address.dc.idfystaging.com/tasks?utf8=%E2%9C%93&searched=true&q%5Bname_cont%5D=&q%5Bstreet_address_cont%5D=&q%5Blandmark_cont%5D=&q%5Bcity_cont%5D=&q%5Bpin_cont%5D=&q%5Bphone_cont%5D=&q%5Bstatus_eq%5D=&q%5Bcategory_eq%5D=&q%5Bvendor_id_eq%5D=&q%5Bclient_id_eq%5D=&commit=Search')
        cy.get(':nth-child(4) > .field > #q_client_id_eq').select(this.data.client_value_for_addressify)
        cy.get(':nth-child(4) > .field > #q_client_id_eq').should('have.value',this.data.client_value_for_addressify)
        cy.get('#task_search > .actions > .btn').click()
    })
})