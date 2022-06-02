describe('first test case',()=>{
    before(function () {
        cy.fixture('userDetails').then(function (data) {
            this.data = data;
        })
    })
    it('checking client in OPs portal',function () {
        cy.visit('https://ops.dc.idfystaging.com/?client_id=idfy-ops')
        cy.get('#username').should('exist').type(this.data.manager_uname)
        cy.get('#password').should('exist').type(this.data.manager_pwd)
        cy.get('#kc-login').should('exist').click()
        //search client is exist or not
        cy.get('.hori > :nth-child(1) > :nth-child(2) > a').should('exist').click()
        cy.get('#q_name_cont').should('exist').type(this.data.company_name)
        cy.get('#company_search > [type="submit"]').should('exist').click()

        cy.get(':nth-child(1) > .f20 > a').should('exist').click()
        cy.get('#left > :nth-child(3) > :nth-child(3) > a').should('exist').click()
        //checking configurations
        //cy.get('#left > :nth-child(3) > :nth-child(3) > a').check()
        cy.get('#company_auto_approve').should('exist').should('be.checked')
        cy.get('#company_dorm').should('be.visible').should('not.be.checked')
        
    })
})