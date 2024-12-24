class checkbox {

    elements = {

        checkbox_label: () => cy.get('.menu-list').find('li').eq(1),
        home_box: () => cy.get('[id="tree-node-home"]'),
        result: () => cy.get('[id="result"]'),
        dropdown_icon: () => cy.get('[class="rct-collapse rct-collapse-btn"]'),
        classified_checkbox: () => cy.get('[id="tree-node-classified"]'),
        expand: () => cy.get('button[title="Expand all"]'),
        collapse: () => cy.get('button[title="Collapse all"]'),
        all_expanded: () => cy.get('[class="rct-node rct-node-parent rct-node-expanded"]'),
        all_boxes: () => cy.get('[class="rct-checkbox"]'),
    }
}

export default new checkbox;