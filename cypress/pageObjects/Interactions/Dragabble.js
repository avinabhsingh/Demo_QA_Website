class dragg{
    elements = {
        dragabble_label: () => cy.get('.menu-list').eq(4).find('li').eq(4),
        simple_tab: () => cy.get('[id="draggableExample-tab-simple"]'),
        dragbox: () => cy.get('[id="dragBox"]'),

        axis_restrict_tab: () => cy.get('[id="draggableExample-tab-axisRestriction"]'),
        x_restrictbox: () => cy.get('[id="restrictedX"]'),
        y_restrictbox: () => cy.get('[id="restrictedY"]'),

        container_restrict_tab: () => cy.get('[id="draggableExample-tab-containerRestriction"]'),
        parent_block: () => cy.get('[id="containmentWrapper"]'),
        dragbox_restrict: () => cy.contains("I'm contained within the box"),
        text_restrict_parent: () => cy.get('[class="draggable ui-widget-content m-3"]'),
        text_restrict: () => cy.contains("I'm contained within my parent"),

        cursor_style_tab: () => cy.get('[id="draggableExample-tab-cursorStyle"]'),
        center_cursor: () => cy.get('[id="cursorCenter"]'),
        topleft_cursor: () => cy.get('[id="cursorTopLeft"]'),
        bottom_cursor: () => cy.get('[id="cursorBottom"]'),

    }
}
export default new dragg;