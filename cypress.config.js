const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true, //Roda todos os spaces
    experimentalStudio: true, //Habilita o studio
  },
});
