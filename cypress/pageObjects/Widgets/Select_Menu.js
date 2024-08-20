class selectmenu {
    elements = {
        selectmenu_label: () => cy.get('.menu-list').eq(3).find('li').eq(8),
        entire_menu: () => cy.get('[id="selectMenuContainer"]'),
        dropdown_menu: () => cy.get('[class=" css-26l3qy-menu"]'),

        //Group-value Dropdown
        group_opt: () => cy.get('[id="withOptGroup"]'),
        dropdown_group1: () => cy.get('[id="react-select-2-group-0-heading"]'),
        dropdown_group2: () => cy.get('[id="react-select-2-group-1-heading"]'),

        //Select one dropdown
        select_one: () => cy.get('[id="selectOne"]'),
        select_dropdown_heading: () => cy.get('[id="react-select-3-group-0-heading"]'),

        //Old Style Select Menu
        old_select: () => cy.get('[id="oldSelectMenu"]'),

        //Multiselect dropdown
        multi_select: () => cy.get('[class=" css-2b097c-container"]').eq(2),

        //Standard multi select
        standard_select: () => cy.get('[id="cars"]'),

    
    }
}

export default new selectmenu;