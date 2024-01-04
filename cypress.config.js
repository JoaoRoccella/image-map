const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true, // roda todos os specs
    experimentalStudio: true, // habilita o Studio
  },
});
