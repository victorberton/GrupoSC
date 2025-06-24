import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from './loginPage';

/*Cenário 1: Acessar tela de login*/
Given('que o usuário acessou a página de login', () => {
  cy.visit('/login');
});

When ('a página é carregada', (username) => {
  cy.get('#user', { timeout: 10000 })
  loginPage.verifyFields(username)
})

Then('devo ver a mensagem {string}', (portalDescription) => {
  loginPage.verifyDescription(portalDescription)
});

/*Cenário 2: Validar campos exibidos na tela de login*/
Then ('o sistema deverá exibir os campos nome e senha', (username, password) => {
  loginPage.verifyFields(username, password)
})

Then ('deverá existir um link {string}', (forgotPassword) => {
  loginPage.verifyForgotPwd(forgotPassword)
})

/*Cenário 3: Realizar login com sucesso, primeiro acesso*/
When ('o usuário digita seu Nome {string} com sucesso', (username) => {
  loginPage.fillUsername(username)
})

When ('digita sua Senha {string} com sucesso', (password) => {
  loginPage.fillPassword(password)
  cy.screenshotComData('fillInLoginFields.png', ['login']);
})

When ('clica no botão Entrar', () => {
  loginPage.submit()
})

Then ('o usuário será direcionado para a homepage e a modal com os termos de aceite deverá ser exibida', () => {
  loginPage.expectTerms()
})

Then ('a modal de farmácia deverá ser exibida caso seja o primeiro acesso', () => {
  loginPage.expectFirstAccess()
})

//cenário 4: Login com Nome incorreto
When ('o usuário digita seu Nome {string} de forma incorreta', (username => {
  loginPage.fillUsername(username)
}))

Then ('o portal exibirá a seguinte mensagem de erro {string}', (errorMessageIncorrectData) => {
  loginPage.verifyErrorMessage(errorMessageIncorrectData)
})

//cenário 5: Login com Senha incorreta
When ('digita sua Senha {string} incorretamente', (password) => {
  loginPage.fillPassword(password)
})

//Cenário 06: Esqueci minha senha
When ('clica em Esqueceu sua senha?', () => {
  loginPage.accessForgotPwdModal()
})

When ('a modal foi aberta e apresentou o texto {string}', (modalTitle) => {
  loginPage.verifyModalText(modalTitle)
})

When ('o usuário digita seu Nome de usuário {string}', (username) => {
  loginPage.fillUsernameFgtPwd(username)
  cy.screenshotComData('forgotPwdPt1.png', ['login']);
})

When ('clica em Receber Código', () => {
  loginPage.submit()
})

Then ('o portal deverá exibir a mensagem de confirmação {string}', (forgotPwdModalMessage) => {
  loginPage. verifyFgtPwdConfirmation(forgotPwdModalMessage)
  cy.screenshotComData('forgotPwdPt2.png', ['login']);
})