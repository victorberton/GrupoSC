class myAccountPage {

  accessForgotPwdModal() {
    cy.get('.btn-link').click()
  }

  accessChangePwdPage() {
    cy.contains('victor').trigger('mouseover');
    cy.contains('Alterar senha').click({ force: true });
  }

  verifyModalText(modalTitle) {
    cy.contains(modalTitle).should('be.visible');
  }

  verifyFgtPwdConfirmation(forgotPwdModalMessage){
    cy.contains(forgotPwdModalMessage).should('be.visible');
  }

  verifyCPwdFields() {
    cy.get('[formControlName="oldPassword"]').should('be.visible');
    cy.get('[formControlName="newPassword"]').should('be.visible');
    cy.get('[formControlName="passwordConfirm"]').should('be.visible')
  }

  verifyRules(rule1, rule2, rule3, rule4, rule5, rule6) {
    const rules = [rule1, rule2, rule3, rule4, rule5, rule6];
    rules.forEach(rule => {
      cy.get('.forgot-pw-modal').should('contain', rule);
    });

    cy.destacar(rules.map(rule => `li:contains("${rule}")`).join(', '));
  }

  verifyForgotPwd(forgotPassword){
    cy.contains(forgotPassword).should('be.visible');
    cy.destacar('.btn-link');

  cy.screenshotComData('verificarCampos.png', ['login']);
  }

  submit() {
    cy.get('button[type="submit"]').eq(0).click();
  }
}

export default new myAccountPage();