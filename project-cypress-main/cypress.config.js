const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
