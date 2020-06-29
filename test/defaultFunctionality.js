

const selectorCnt = require('./../data/selectors.json').counter;
const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-042 LLF accept 1', function () {
        const button = $(selectorCnt.lowerLimitField);
        button.click();
        const input = $(selectorCnt.lowerInputField);
        input.click();
        browser.keys('Backspace');
        browser.keys(expectedDCF.inputMin.toString());
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    });

});