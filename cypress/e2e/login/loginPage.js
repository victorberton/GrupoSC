class LoginPage {

  verifyDescription(portalDescription){
    cy.contains(portalDescription).should('be.visible');
  }

   verifyErrorMessage(errorMessageIncorrectData){
    cy.contains(errorMessageIncorrectData, {timeout: 2000}).should('be.visible');
  }

  verifyFields() {
    cy.get('#user').should('be.visible');
    cy.get('#password').should('be.visible');

    cy.destacar('#user');
    cy.destacar('#password');
  }

  verifyForgotPwd(forgotPassword){
    cy.contains(forgotPassword).should('be.visible');
    cy.destacar('.btn-link');

  cy.screenshotComData('verificarCampos.png', ['login']);
  }

  fillUsername(username) {
    cy.get('#user').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  expectTerms() {
    cy.get('[data-page-id="homepage"]').then($body => {
      if ($body.find('.dialog-terms').length > 0) {
        // A modal apareceu
        cy.get('.dialog-terms').should('be.visible');
        cy.get('#termsCheckbox').check();
        cy.screenshotComData('modalChecarTermos.png', ['login']);
        cy.get('button[type="submit"]').click();
      } else {
        // A modal de termos não apareceu, teste segue em frente
        cy.log('Modal não apareceu, seguindo com o teste');
      }
    });
  }

  expectFirstAccess() {
    cy.wait(10000)
    cy.get('[data-page-id="homepage"]').then($body => {
      //cy.get('.select-pharmacy-modal', { timeout: 10000 }).should('be.visible');
      if ($body.find('.select-pharmacy-modal__title').length) {
      //selecione sua farmacia.
        cy.contains('div', 'Selecionar farmácia').first().click()
        cy.contains('div', 'Drogasil').first().click()

        cy.screenshotComData('selectPharmacyModal.png', ['login']);
        cy.get('button[type="submit"]').first().click();
      } 
      else {
        // A modal de termos não apareceu, teste segue em frente
        //cy.log('Modal não apareceu, seguindo com o teste');
        cy.log('****************************************************** Modal não apareceu, seguindo com o teste ******************************************************');
        cy.screenshotComData('selectPharmacyModalNotDisplayed.png', ['login']);
      }
    });
  }
}

export default new LoginPage();