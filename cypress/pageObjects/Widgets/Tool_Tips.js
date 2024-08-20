class tooltip {
    elements = {
        tooltip_label: () => cy.get('.menu-list').eq(3).find('li').eq(6),
        tip_btn: () => cy.get('[id="toolTipButton"]'),
        tip_textfield: () => cy.get('[id="toolTipTextField"]'),
        tip_text: () => cy.get('[id="texToolTopContainer"]'),
        tooltip_result: () => cy.get('[class="tooltip-inner"]'),
    }
}

export default new tooltip;