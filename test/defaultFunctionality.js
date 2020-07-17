const selectorCnt = require('./../data/selectors.json').counter;
const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
const expectedCnt = require('./../data/expected.json').counter ;
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

    it('TC-043 ULF accept 9 ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $(selectorCnt.lowerLimitField).click();
        const input = $(selectorCnt.lowerInputField).getValue();
        expect(input).toEqual(expectedCnt.lowerInputField);
        $(selectorCnt.upperLimitField).click();
        $(selectorCnt.upperInputField).setValue('9');
        const result = $$(selectorCnt.blackBtn)[17].isDisplayed();
        expect(result).toEqual(true);
    });

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $(selectorCnt.lowerLimitField).click();
        $(selectorCnt.lowerInputField).setValue('1');
        $(selectorCnt.upperLimitField).click();
        $(selectorCnt.upperInputField).setValue('1');
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(expectedDCF.numberOfBlackButtons);
    });

    it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons', function () {
        $(selectorCnt.upperInputField).setValue('9');
        $(selectorCnt.lowerInputField).setValue('9');
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(expectedDCF.numberOfBlackButtons);
    });

    it('TC-046 Reset button works', function () {
        $(selectorCnt.resetBtn).click();
        const actual = $(selectorCnt.countValue).getText();
        expect(actual).toEqual(expectedCnt.countValue);
    });

    it('TC-047 Delete button works', function () {
        $(selectorCnt.deleteBtn).click();
        const actual = $(selectorCnt.countValue).isDisplayed();
        expect(actual).toEqual(false);
    });
});
