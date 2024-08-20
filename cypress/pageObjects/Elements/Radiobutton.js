class radiobutton {

    elements = {

        radiobutton_label: () => cy.get('.menu-list').find('li').eq(2),
        enabled_option: () => cy.get('[class="custom-control-label"]'),
        disbaled_option: () => cy.get('[class="custom-control-label disabled"]'),        
        
        yes: () => cy.get('[id="yesRadio"]'),
        impressive: () => cy.get('[id="impressiveRadio"]'),
        no: () => cy.get('[id="noRadio"]'),
        result: () => cy.get('[class="text-success"]'),



    }
}

export default new radiobutton;