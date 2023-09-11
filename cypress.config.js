const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'b8m6ed',
  defaultCommandTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.emag.ro'
  },
})