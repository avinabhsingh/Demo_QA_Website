class tab {
    elements = {
        tab_label: () => cy.get('.menu-list').eq(3).find('li').eq(5),

        what_tab: () => cy.get('[id="demo-tab-what"]'),
        what_content: () => cy.get('[id="demo-tabpane-what"]'),
        
        origin_tab: () => cy.get('[id="demo-tab-origin"]'),
        origin_content: () => cy.get('[id="demo-tabpane-origin"]'),

        use_tab: () => cy.get('[id="demo-tab-use"]'),
        use_content: () => cy.get('[id="demo-tabpane-use"]'),
        
        more_tab: () => cy.get('[id="demo-tab-more"]'),
        more_content: () => cy.get('[id="demo-tabpane-more"]'),

    }
}

export default new tab;