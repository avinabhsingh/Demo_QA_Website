class resize{
    elements = {
        resizable_label: () => cy.get('.menu-list').eq(4).find('li').eq(2),

        restrict_box: () => cy.get('[id="resizableBoxWithRestriction"]'),
        unrestricted_box: () => cy.get('[id="resizable"]'),
        resize_cursor: () => cy.get('.react-resizable-handle.react-resizable-handle-se'),

    }
}
export default new resize;