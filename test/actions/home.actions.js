const homeSelectors = require('../pageobjects/home.page')

const utilActions = new UtilActions()

module.exports = class HomeActions extends homeSelectors {
    async navigate(){
        browser.url('www.google.com')
        browser.maximizeWindow()
    }
    async fillSearchForm(){
        await (await this.searchBar).sendKeys("BEON.tech")
    }
    async clickSearchButton(){
        await (await this.searchButton).click()
    }
}