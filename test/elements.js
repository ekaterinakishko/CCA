const selectorGnrl = require('./../data/selectors.json').general;
const expectedGnrl = require('./../data/expected.json')  ;
const selectorCnt = require('./../data/selectors.json').counter ;
const expectedCnt = require('./../data/expected.json').counter ;
const inputNumber = require ('./../helpers/inputNumber');


describe('Complex Counter App', function () { //define suite title by passing a string
    describe('Getting to the page', function () { //define sub-suite title by passing a string
        it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })
    });
    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const header = $(selectorGnrl.header);
            const actual = header.waitForDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', function () {
            const actual = $(selectorGnrl.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', function () {
            const actual = $(selectorGnrl.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })
        it('TC-006  Default Value Field', function () {
            const actual = $(selectorGnrl.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-007  Label for Default Value Field', function () {
            const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 1].isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-008  Add Counter', function () {
            const actual = $(selectorGnrl.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })
    });
    describe('Elements value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGnrl.header).getText();
            expect(actual).toEqual(expectedGnrl.general.header);
        })
        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorGnrl.totalResult).getText();
            expect(actual).toEqual(expectedGnrl.general.totalResult);
        })
        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $(selectorGnrl.addNameField).getValue()
            expect(actual).toEqual(expectedGnrl.general.addNameField);
        })
        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 2].getText();
            expect(actual).toEqual(expectedGnrl.general.addNameFieldLabel);
        })
        it('TC-013  Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $(selectorGnrl.defaultValueField).getValue();
            expect(actual).toEqual(expectedGnrl.general.defaultValueField);
        })
        it('TC-014  Placeholder for Default Calue Field = 50', function () {
            const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 1].getText();
            expect(actual).toEqual(expectedGnrl.general.defaultValueFieldLabel);
        })
        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorGnrl.addCounterBtn).getText();
            expect(actual).toEqual(expectedGnrl.general.addCounterBtn);
        })
    })
    describe('Default Counter elements exist', function () {
        it('TC-016 Counter Name', function () {
            const actual = $(selectorCnt.counterName).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-017 Count Value', function () {
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-018 LLF', function () {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF', function () {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021  Default Sub Buttons && Add Buttons', function () {
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedCnt.defaultNumberBlackBtn);
        });

        it('TC-022  Delete Button', function () {
            const actual = $(selectorCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-023 Reset Button', function () {
            const actual = $(selectorCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024 Edit Button Name', function () {
            const actual = $(selectorCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        });

        it('TC-025 Label for Edit Button Name', function () {
            const actual = $(selectorCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })
    })

    describe('Default Counter Elements value', function () {
        it('TC-028 Counter Name = 1. Default Counter', function () {
            const actual = $(selectorCnt.counterName).getText();
            expect(actual).toEqual(expectedCnt.counterName);
        });

        it('TC-029 Count value = 0', function () {
            const actual = $(selectorCnt.countValue).getText();
            expect(actual).toEqual(expectedCnt.countValue);
        });

        it('TC-030 LLF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorCnt.lowerLimitField).getText();
            expect(actual).toEqual(expectedCnt.lowerLimitField);
        });

        it('TC-031 Default Sub Buttons = -1, -2, -3', function () {
            const actual = $$(selectorCnt.blackBtn).filter((el, i) => i < 3).map(el=>el.getText()).toString();
            expect(actual).toEqual(expectedCnt.blackBtnNegative);
        });

        it('TC-032 ULF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorCnt.upperLimitField).getText();
            expect(actual).toEqual(expectedCnt.upperLimitField);
        });

        it('TC-033 Default Add Buttons = 1, 2, 3', function () {
            const actual = $$(selectorCnt.blackBtn).filter((el, i) => i > 2).map(el=>el.getText()).toString();
            expect(actual).toEqual(expectedCnt.blackBtnPositive);
        });

        it('TC-034 Delete button = Delete', function () {
            const actual = $(selectorCnt.deleteBtn).getText();
            expect(actual).toEqual(expectedCnt.deleteBtn);
        });

        it('TC-035 Reset button = Reset', function () {
            const actual = $(selectorCnt.resetBtn).getText();
            expect(actual).toEqual(expectedCnt.resetBtn);
        });

        it('TC-036 Label = Edit Counter Title', function () {
            const actual = $(selectorCnt.editNameFieldLabel).getText();
            expect(actual).toEqual(expectedCnt.editNameFieldLabel);
        });

        it('TC-037 Placeholder for Edit Name Field = Default Counter', function () {
            const actual = $(selectorCnt.editNameField).getValue();
            expect(actual).toEqual(expectedCnt.editNameField);
        });

        it('TC-038 Input for LLF = 1', function () {
            $(selectorCnt.lowerLimitField).click();
            const actual = $(selectorCnt.lowerInputField).getValue();
            expect(actual).toEqual(expectedCnt.lowerInputField);
        });

        it('TC-039 Input for ULF = 3', function () {
            $(selectorCnt.upperLimitField).click();
            const actual = $(selectorCnt.upperInputField).getValue();
            expect(actual).toEqual(expectedCnt.upperInputField);
        });


    });
});

