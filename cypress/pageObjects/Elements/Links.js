class links{

    elements = {
        links_label: () => cy.get('.menu-list').find('li').eq(5),
        home_link1: () => cy.get('[id="simpleLink"]'),
        home_link2: () => cy.get('[id="dynamicLink"]'),
        created_link: () => cy.get('[id="created"]'),
        nocontent_link: () => cy.get('[id="no-content"]'),
        moved_link: () => cy.get('[id="moved"]'),
        badrequest_link: () => cy.get('[id="bad-request"]'),
        unautho_link: () => cy.get('[id="unauthorized"]'),
        forbid_link: () => cy.get('[id="forbidden"]'),
        notfound: () => cy.get('[id="invalid-url"]'),
 
    }
}
export default new links;