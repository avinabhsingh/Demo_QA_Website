class dropp{
    elements = {
        droppable_label: () => cy.get('.menu-list').eq(4).find('li').eq(3),

        simple_tab: () => cy.get('[id="droppableExample-tab-simple"]'),
        dragbox: () => cy.get('[id="draggable"]'),
        dropbox: () => cy.get('[id="droppable"]'),

        accept_tab: () => cy.get('[id="droppableExample-tab-accept"]'),
        acceptbox: () => cy.get('[id="acceptable"]'),
        noacceptbox: () => cy.get('[id="notAcceptable"]'),

        prevent_tab: () => cy.get('[id="droppableExample-tab-preventPropogation"]'),
        greed_dragbox: () => cy.get('[id="dragBox"]'),
        nogreedbox: () => cy.get('[id="notGreedyDropBox"]'),
        nogreed_innerbox: () => cy.get('[id="notGreedyInnerDropBox"]'),
        greedbox: () => cy.get('[id="greedyDropBox"]'),
        greed_innerbox: () => cy.get('[id="greedyDropBoxInner"]'),

        revert_tab: () => cy.get('[id="droppableExample-tab-revertable"]'),
        revertbox: () => cy.get('[id="revertable"]'),
        norevertbox: () => cy.get('[id="notRevertable"]'),

    }
}
export default new dropp;