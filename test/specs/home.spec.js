const HomeActions = require('../actions/home.actions')
const ResultsActions = require('../actions/results.actions')
var assert = require('assert')

const homeActions = new HomeActions()
const resultsActions = new ResultsActions()

describe ('Google Home Page', () => {
    beforeEach(async function() {
        await homeActions.navigate()
        //reuse the navigation command
        //the fill and click button are not in this method since maybe there is the need of creating some homepage tests, with no search involved
    })

    it ('Should search and validate the results', async function () {
        await homeActions.fillSearchFormAndEnter("BEON.tech")
        await expect(await resultsActions.hrefResults).toBeDisplayed()
    })

    it ('Should search and click on a result', async function () {
        await homeActions.fillSearchFormAndEnter("BEON.tech")
        await resultsActions.clickResult()
        await expect(browser).toHaveUrlContaining('https://beon.tech/')
        await expect(browser).toHaveTitle('BEON.tech - Unlock innovation with top-tier talent from Latin America')
    })
})