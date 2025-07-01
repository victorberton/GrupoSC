class myAccountPage {

  accessForgotPwdModal() {
    cy.get('.btn-link').click()
  }

  accessChangePwdPage() {
    cy.get('.box-menu').trigger('mouseover');
    cy.contains('Alterar senha').click({ force: true });
  }

  verifyModalText(modalTitle) {
    cy.contains(modalTitle).should('be.visible');
  }

  verifyFgtPwdConfirmation(forgotPwdModalMessage){
    cy.contains(forgotPwdModalMessage).should('be.visible');
  }

  verifyCPwdFields() {
    const fields = ['oldPassword', 'newPassword', 'passwordConfirm'];
    fields.forEach(field => {
      cy.get(`[formControlName="${field}"]`).should('be.visible');
    });
  }

  verifyRules(table) {
    // transforma em array plano
    const rules = table.raw().flat();
    cy.log('Regras:', JSON.stringify(rules));

    cy.destacar(rules.map(rule => `li:contains("${rule}")`).join(', '));
    cy.screenshotComData('checarRegras', ['myAccount']);
  }

  verifyForgotPwd(forgotPassword){
    cy.contains(forgotPassword).should('be.visible');
    cy.destacar('.btn-link');

    cy.screenshotComData('verificarModalPwd.png', ['myAccount']);
  }

  submit() {
    cy.get('button[type="submit"]').eq(0).click();
  }
}

export default new myAccountPage();