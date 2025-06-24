// destacar campo em vermelho
Cypress.Commands.add('destacar', (seletor) => {
  cy.get(seletor).invoke('css', 'border', '3px solid red');
  cy.wait(200); // para aplicar o estilo
});

// criar pasta com data atual, printar e inserir na pasta.
//ex de uso: cy.screenshotComData('fillInLoginFields.png', ['login']);
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