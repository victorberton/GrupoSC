import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import myAccountPage from "./myAccountPage";

Given('que o usuário realizou login', () => {
  cy.login('victor.berton', 'NTTdata2025*@');
});

/*Cenário 1: Acessar tela de login*/
When('abro o menu no cabeçalho e clico na opção Alterar senha', () => {
  myAccountPage.accessChangePwdPage();
});

Then ('o portal deverá apresentar uma modal com o título {string}', (modalTitle) => {
  myAccountPage.verifyModalText(modalTitle);
});

Then ('deverá apresentar os campos {string}, {string} e {string}', (senhaAtual, novaSenha, confirmarSenha) => {
  myAccountPage.verifyCPwdFields(senhaAtual, novaSenha, confirmarSenha);
});

Then ('apresentar as regras de senha:', (table) => {
  myAccountPage.verifyRules(table);
});