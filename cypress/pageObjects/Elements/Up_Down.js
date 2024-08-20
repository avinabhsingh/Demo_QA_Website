class up_down{
    elements = {
        broken_label: () => cy.get('.menu-list').find('li').eq(7),
        download_btn: () => cy.get('[id="downloadButton"]'),
        upload_btn: () => cy.get('[id="uploadFile"]'),
        file_path: () => cy.get('[id="uploadedFilePath"]'),
    }
}
export default new up_down