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

## 1. Instale as dependências:

### NPM 
npm install - npm install --save-dev cypress

### Cucumber Preprocessor (para Gherkin)
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

### Pré-processador esbuild
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

### Esbuild
npm install --save-dev esbuild
#

### Currently supported Environments
* baseUrl - the configuration can be found in the cypress.config.js file: 

### Report files
* Cypress automatically generates test reports when running in headless mode (cypress run). On failures, it captures screenshots and videos to help debug issues. These files are saved under cypress/screenshots/ and cypress/videos/. You can customize reports and configure folders and formats in cypress.config.js. This makes test evidence clear and easy to maintain.
* We’ve customized the process to store screenshots in unique folders named with the current date, improving traceability

### Scenarios
Here's an overview of the scenarios covered by the automated tests.
To edit the data for each scenario, just alter the example lines in its respective *.feature* file.