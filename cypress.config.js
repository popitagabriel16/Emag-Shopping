const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.emag.ro'
  },
})