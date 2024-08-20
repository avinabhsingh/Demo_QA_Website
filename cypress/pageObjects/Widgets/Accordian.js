class accordian{
    elements = {
        widgets_label : () => cy.contains('Widgets'),
        accordian_label: () => cy.get('.menu-list').eq(3).find('li').eq(0),

        section1_head: () => cy.get('[id="section1Heading"]'),
        section1_body: () => cy.get('[id="section1Content"]'),
        section2_head: () => cy.get('[id="section2Heading"]'),
        section2_body: () => cy.get('[id="section2Content"]'),
        section3_head: () => cy.get('[id="section3Heading"]'),
        section3_body: () => cy.get('[id="section3Content"]'),
        
        

    }
}
export default new accordian;