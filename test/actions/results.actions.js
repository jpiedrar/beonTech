const resultsSelectors = require('../pageobjects/results.page')

module.exports = class ResultsActions extends resultsSelectors {
    async clickResult(){
        await (await this.resultTitle).click()
    }
}