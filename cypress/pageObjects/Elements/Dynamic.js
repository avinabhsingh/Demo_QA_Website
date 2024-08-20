class dynamic{
    elements = {
        dynamic_label: () => cy.get('.menu-list').find('li').eq(8),
        before_enable: () => cy.get('[id="enableAfter"]'),
        color_change: () => cy.get('[id="colorChange"]'),
        after_visible: () => cy.get('[id="visibleAfter"]'),
    }
}
 export default new dynamic;