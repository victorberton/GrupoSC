class LoginPage {

  accessForgotPwdModal() {
    cy.get('.btn-link').click()
  }

  verifyDescription(portalDescription){
    cy.contains(portalDescription).should('be.visible');
  }

   verifyErrorMessage(errorMessageIncorrectData){
    cy.contains(errorMessageIncorrectData, {timeout: 2000}).should('be.visible');
    cy.log(`Mensagem de erro exibida: ${errorMessageIncorrectData}`);
  }

  verifyModalText(modalTitle) {
    cy.contains(modalTitle).should('be.visible');
  }

  verifyFgtPwdConfirmation(forgotPwdModalMessage){
    cy.contains(forgotPwdModalMessage).should('be.visible');
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

  cy.screenshotComData('verificarCampos', ['login']);
  }

  fillUsername(username) {
    cy.get('#user').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  fillUsernameFgtPwd(username) {
    cy.get('.form-control').eq(0).type(username)
  }

  submit() {
    cy.get('button[type="submit"]').eq(0).click();
  }

  expectMultipleSessionsModal() {
    cy.wait(5000) // Aguarda 10 segundos para garantir que a página carregou completamente
    cy.get('[data-page-id="login"]').then($body => {
      if ($body.find('.session-modal').length > 0) {
        // A modal apareceu
        cy.get('.session-modal').should('be.visible');
        cy.screenshotComData('sessionsModal', ['login']);
        cy.get('[type="button"]').contains('Sim').click();
      } else {
        // A modal de múltiplas sessões não apareceu, teste segue em frente
        cy.log('Modal de múltiplas sessões não apareceu, seguindo com o teste');
      }
    });
  }

  expectTerms() {
    cy.wait (5000)
    cy.get('[data-page-id="homepage"]').then($body => {
      if ($body.find('.dialog-terms').length > 0) {
        // A modal apareceu
        cy.get('.dialog-terms').should('be.visible');
        cy.get('#termsCheckbox').check();
        cy.screenshotComData('modalChecarTermos', ['login']);
        cy.get('button[type="submit"]').click();
      } else {
        // A modal de termos não apareceu, teste segue em frente
        cy.log('Modal não apareceu, seguindo com o teste');
      }
    });
  }

  expectFirstAccess() {
    cy.wait(5000)
    cy.get('[data-page-id="homepage"]').then($body => {
      //cy.get('.select-pharmacy-modal', { timeout: 10000 }).should('be.visible');
      if ($body.find('.select-pharmacy-modal__title').length) {
      //selecione sua farmacia.
        cy.contains('div', 'Selecionar farmácia').first().click()
        cy.contains('div', 'Drogasil').first().click()

        cy.screenshotComData('selectPharmacyModal', ['login']);
        cy.get('button[type="submit"]').first().click();
      } 
      else {
        // A modal de termos não apareceu, teste segue em frente
        //cy.log('Modal não apareceu, seguindo com o teste');
        cy.log('****************************************************** Modal não apareceu, seguindo com o teste ******************************************************');
      }
    });
  }
}

export default new LoginPage();