class frame{
    elements ={
        frames_label: () => cy.get('.menu-list').eq(2).find('li').eq(2),
        frame1: () => cy.get('[id="frame1"]'),
        frame2: () => cy.get('[id="frame2"]'),

    }
}

export default new frame;