const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'b8m6ed',
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.emag.ro'
  },
})