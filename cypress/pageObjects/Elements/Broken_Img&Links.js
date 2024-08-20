class broken{

    elements = {
        broken_label: () => cy.get('.menu-list').find('li').eq(6),
        valid_img: () => cy.get('img[src="/images/Toolsqa.jpg"]'),
        broken_img: () => cy.get('img[src="/images/Toolsqa_1.jpg"]')
    }
}

export default new broken;