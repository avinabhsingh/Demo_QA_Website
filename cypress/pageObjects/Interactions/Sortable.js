class sortable{
    elements = {
        interactions_label : () => cy.contains('Interactions'),
        sortable_label: () => cy.get('.menu-list').eq(4).find('li').eq(0),

        list_tab: () => cy.get('[id="demo-tab-list"]'),
        sort_list: () => cy.get('[id="demo-tabpane-list"]'),

        gird_tab: () => cy.get('[id="demo-tab-grid"]'),
        sort_grid: () => cy.get('[id="demo-tabpane-grid"]'),

        list_num: () => cy.get('.list-group-item'),
    }
}
export default new sortable;