const HomeActions = require('../actions/home.actions')
var assert = require('assert')

const homeActions = new HomeActions()

describe ('Google Home Page', () => {
    it ('Should search and validate the results | Regression, Smoke, Sanity', async function () {
        await homeActions.navigate()
        await homeActions.fillSearchForm("BEON.tech")
        await homeActions.clickSearchButton()
    })
})