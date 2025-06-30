const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // Passa o stepDefinitions como terceiro parâmetro do plugin
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: ["cypress/e2e/**/**/*.js"]
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },

    defaultCommandTimeout: 5000,
    viewportWidth: 1440,
    viewportHeight: 800,
    baseUrl: "https://storefront.dev.gscdigital.com.br",
  },
});