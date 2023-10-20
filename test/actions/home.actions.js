const homeSelectors = require('../pageobjects/home.page')

module.exports = class HomeActions extends homeSelectors {
    async navigate(){
        browser.url('www.google.com')
        browser.maximizeWindow()
    }
    async fillSearchForm(searchCriteria){
        await (await this.searchBar).setValue(searchCriteria)
    }
    async clickSearchButton(){
        await (await this.searchButton).click()
    }
    async fillSearchFormAndEnter(searchCriteria){
        await (await this.searchBar).setValue(searchCriteria)
        browser.keys("\ue007")
    }
}