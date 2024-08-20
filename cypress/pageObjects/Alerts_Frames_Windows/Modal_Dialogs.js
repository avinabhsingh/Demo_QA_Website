class modal_dialogs{
    elements ={
        modal_dialog_label: () => cy.get('.menu-list').eq(2).find('li').eq(4),

        small_modal_dialog_btn: () => cy.get('[id="showSmallModal"]'),
        large_modal_dialog_btn: () => cy.get('[id="showLargeModal"]'),

        small_modal_dialog: () => cy.get('[class="modal-dialog modal-sm"]'),
        large_modal_dialog: () => cy.get('[class="modal-dialog modal-lg"]'),

        small_dialog_head: () => cy.get('[id="example-modal-sizes-title-sm"]'),
        large_dialog_head: () => cy.get('[id="example-modal-sizes-title-lg"]'),

        dialog_content: () => cy.get('[class="modal-body"]'),

        close_small_btn: () => cy.get('button[id="closeSmallModal"]'),
        close_large_btn: () => cy.get('button[id="closeLargeModal"]'),
    }
}

export default new modal_dialogs;