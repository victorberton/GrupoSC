# NTT Data Business Solutions Brazil
## GrupoSC Test automation
#
##### Authors: Victor Berton
#
#

## Overview

### Currently supported Environments
* S1 environment - uses "s1" on the *default* line on the *cucumber.yaml* file.
    * Uses "test-plus.moen" and "s1-www.moen.com" websites.
* D1 environment - uses "d1" on the *default* line on the *cucumber.yaml* file.
    * Uses "dev-plus.moen" and "d1-www.moen.com" websites.

*baseUrl - the configuration can be found in the cypress.config.js file: 
    * Use - https://storefront.dev.gscdigital.com.br/

### Report files
* Cypress automatically generates test reports when running in headless mode (cypress run). On failures, it captures screenshots and videos to help debug issues. These files are saved under cypress/screenshots/ and cypress/videos/. You can customize reports and configure folders and formats in cypress.config.js. This makes test evidence clear and easy to maintain.
* We’ve customized the process to store screenshots in unique folders named with the current date, improving traceability

### Scenarios
Here's an overview of the scenarios covered by the automated tests.
To edit the data for each scenario, just alter the example lines in its respective *.feature* file.