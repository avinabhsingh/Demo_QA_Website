class menu {
    elements = {
        menu_label: () => cy.get('.menu-list').eq(3).find('li').eq(7),
        menu_id: () => cy.get('[id="nav"]')
    
    }
}

export default new menu;