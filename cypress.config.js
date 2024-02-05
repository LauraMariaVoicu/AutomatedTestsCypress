const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId : 'h7326q',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
