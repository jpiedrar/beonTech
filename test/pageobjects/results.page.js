module.exports = class Home {
    get searchResults() { return $('//div[@id="search"]') }
    get hrefResults() { return $('//a[contains(@href, "beon.tech")]') }
    get resultTitle() { return $('//h3[@class="LC20lb MBeuO DKV0Md"]')}
}