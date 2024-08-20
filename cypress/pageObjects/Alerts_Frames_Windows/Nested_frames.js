class nested_frames{
    elements ={
        nested_frames_label: () => cy.get('.menu-list').eq(2).find('li').eq(3),
        parent_frame: () => cy.iframe('[id="frame1"]'),
        child_frame: () => cy.get('[id="frame2"]'),

    }
}

export default new nested_frames;