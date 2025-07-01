# NTT Data Business Solutions Brazil
## GrupoSC Test automation
#
##### Authors: Victor Berton
#
#

## Overview
### 🧪 Testes Automatizados - Cypress + Cucumber
Este projeto contém a automação de testes E2E utilizando o [Cypress](https://www.cypress.io/) com suporte a [Cucumber (BDD)](https://github.com/badeball/cypress-cucumber-preprocessor).

---
## 📋 Pré-requisitos
* Node.js (v18+ recomendado)
* npm install --save-dev \
* cypress \
* @badeball/cypress-cucumber-preprocessor \
* @bahmutov/cypress-esbuild-preprocessor \
* esbuild

## 📦 O que cada uma faz:

* cypress ->	Framework de testes end-to-end
* @badeball/cypress-cucumber-preprocessor -> Suporte à escrita de testes em Gherkin (.feature)
* @bahmutov/cypress-esbuild-preprocessor -> Necessário para compilar os arquivos .feature com esbuild
* esbuild	-> Bundler rápido usado para transpilar os arquivos de teste

## Instale as dependências:

#### NPM 
npm install - npm install --save-dev cypress

#### Cucumber Preprocessor (para Gherkin)
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

#### Pré-processador esbuild
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

#### Esbuild
npm install --save-dev esbuild
#

### Ambientes utilizados
* baseUrl - a configuração pode ser encontrada no arquivo cypress.config.js. 

### Relatórios
* O Cypress gera relatórios de teste automaticamente quando executado no modo headless (cypress run). Em caso de falhas, ele captura capturas de tela e vídeos para ajudar a depurar problemas. Esses arquivos são salvos em cypress/screenshots/ e cypress/videos/. Você pode personalizar relatórios e configurar pastas e formatos em cypress.config.js. Isso torna as evidências dos testes claras e fáceis de manter..
* Nós customizamos o processo de screenshots em um único diretório nomeado com a data atual + suíte de teste, melhorando a rastreabilidade.

### Cenários
Aqui está um overview da cobertura de cenários dos testes automatizados
Para editar os dados de cada cenário, basta alterar

# ...