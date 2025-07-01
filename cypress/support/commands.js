// destacar campo em vermelho
Cypress.Commands.add('destacar', (seletor) => {
  cy.get(seletor).invoke('css', 'border', '3px solid red');
  cy.wait(200); // para aplicar o estilo
});

// criar pasta com data atual, printar e inserir na pasta.
// ex de uso: cy.screenshotComData('fillInLoginFields', ['login']);
Cypress.Commands.add('screenshotComData', (nomeArquivo, subpastas = []) => {
  const pastaData = getDataFormatada();

  // Junta pasta da data com as subpastas passadas, separadas por '/'
  const caminhoPasta = [pastaData, ...subpastas].join('/');
  const caminhoCompleto = `${caminhoPasta}/${nomeArquivo}`;

  cy.screenshot(caminhoCompleto, { overwrite: true });
});

function getDataFormatada() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

// Este comando realiza o login no sistema, verificando a presença de modais e interagindo com eles conforme necessário.
// Ele deve ser usado em testes onde o login é um pré-requisito para acessar outras funcionalidades do sistema.
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('#user', { timeout: 10000 })
  cy.get('#user').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();

  cy.wait(5000) // Aguarda 5 segundos para garantir que a página carregou completamente
  cy.get('[data-page-id="login"]').then($body => {
    if ($body.find('.session-modal').length > 0) {

      // A modal apareceu
      cy.get('.session-modal').should('be.visible');
      cy.get('[type="button"]').contains('Sim').click();
    } else {
      // A modal de múltiplas sessões não apareceu, teste segue em frente
      cy.log('Modal de múltiplas sessões não apareceu, seguindo com o teste');
    }
  });

  cy.get('[data-page-id="homepage"]').then($body => {
      if ($body.find('.dialog-terms').length > 0) {

        // A modal apareceu
        cy.get('.dialog-terms').should('be.visible');
        cy.get('#termsCheckbox').check();
        cy.get('button[type="submit"]').click();
      } else {
        // A modal de termos não apareceu, teste segue em frente
        cy.log('Modal não apareceu, seguindo com o teste');
      }
    });

    cy.wait(5000)
    cy.get('[data-page-id="homepage"]').then($body => {
      if ($body.find('.select-pharmacy-modal__title').length) {

      //selecione sua farmacia.
        cy.contains('div', 'Selecionar farmácia').first().click()
        cy.contains('div', 'Drogasil').first().click()
        cy.get('button[type="submit"]').first().click();
      } 
      else {
        // A modal de termos não apareceu, teste segue em frente
        cy.log('****************************************************** Modal não apareceu, seguindo com o teste ******************************************************');
      }
    });
});