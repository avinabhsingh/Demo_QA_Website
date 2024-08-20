class button{

    elements = {
        button_label : () => cy.get('.menu-list').find('li').eq(4),
        dbclick_btn : () => cy.get('[id="doubleClickBtn"]'),
        dbclick_msg : () => cy.get('[id="doubleClickMessage"]'),

        rightclick_btn : () => cy.get('[id="rightClickBtn"]'),
        rightclick_msg : () => cy.get('[id="rightClickMessage"]'),

        clickme_btn : () => cy.get('[class="btn btn-primary"]'),
        clickme_msg : () => cy.get('[id="dynamicClickMessage"]'),
    }
}

export default new button;