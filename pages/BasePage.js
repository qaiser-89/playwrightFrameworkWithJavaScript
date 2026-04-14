import { expect } from "@playwright/test";

export class BasePage{

/**
 * 
 * @param {import("@playwright/test").Page} page 
 */

constructor(page){
    this.page = page;
}
 /**
     * @param{import("@playwright/test").Page} page
     */
async reloadTheApp(){
    await this.page.reload();

}

 /**
     * @param{import("@playwright/test").Page} page
     */
async goBack(){
    await this.page.goBack();
}

 /**
     * @param{import("@playwright/test").Page} page
     */
async goFoward(){
    await this.page.goForward();
}

 /**
     * @param{import("@playwright/test").Page} page
     */
async goTo(path)
{
    this.page.goto(path);
}

 /**
     * @param{import("@playwright/test").Page} page
     */
getCurrentUrl()
{
   return this.page.getCurrentUrl();
}

 /**
     * @param{import("@playwright/test").Page} page
     */
async getCurrentTitle()
{
  return  await this.page.title();
}

 /**
     * @param{import("@playwright/test").Page} page
     */
async assertUrlNotContains(pattern)
{
    expect(this.page).not.toHaveURL(pattern);
}

 /**
     * @param{import("@playwright/test").Page} page
     */
async assertUrlContains(pattern)
{
    expect(this.page).toHaveURL(pattern);
}
/**
 * we need to pass the timeout in milisecods if not default timeout for wait for an element is 10 seconds
 * @param {import("@playwright/test")} locator 
 * @param {number} timeout 
 */
async waitForElementToBeVisible(locator, timeout = 10000)
{
    await locator.waitFor({state:"visible",timeout});
}
/**
 * 
 * @param {import("@playwright/test")} locator 
 * @param {number} timeout 
 */
async waitForElementToBeInHidden(locator, timeout = 10000)
{
    await locator.waitFor({state:"hidden",timeout});
}

/**
 * 
 * @param {import("@playwright/test")} locator 
 */
async hooverOnElement(locator)
{
    await locator.hoover();
}

/**
 * @param {import("@playwright/test")} locator
 */
async clickOnElement(locator)
{
    await locator.click();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async enterText(locator, text)
{
    await locator.fill(text);
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async selectOptionByText(locator, text)
{
    await locator.selectOption({label:text});
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} value
 */
async selectOptionByValue(locator, value)
{
    await locator.selectOption({value:value});
}

/**
 * @param {import("@playwright/test")} locator
 * @param {number} index
 */
async selectOptionByIndex(locator, index)
{
    await locator.selectOption({index:index});
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementContainsText(locator, text)
{
    await expect(locator).toContainText(text);
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementHasText(locator, text)
{
    await expect(locator).toHaveText(text);
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsVisible(locator)
{
    await expect(locator).toBeVisible();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsHidden(locator)
{
    await expect(locator).toBeHidden();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsEnabled(locator)
{
    await expect(locator).toBeEnabled();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsDisabled(locator)
{
    await expect(locator).toBeDisabled();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsChecked(locator)
{
    await expect(locator).toBeChecked();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsNotChecked(locator)
{
    await expect(locator).not.toBeChecked();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsSelected(locator)
{
    await expect(locator).toBeSelected();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsNotSelected(locator)
{
    await expect(locator).not.toBeSelected();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsFocused(locator)
{
    await expect(locator).toBeFocused();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsNotFocused(locator)
{
    await expect(locator).not.toBeFocused();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsVisible(locator)
{
    await expect(locator).toBeVisible();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsNotVisible(locator)
{
    await expect(locator).not.toBeVisible();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsEnabled(locator)
{
    await expect(locator).toBeEnabled();
}

/**
 * @param {import("@playwright/test")} locator
 * @param {string} text
 */
async assertElementIsDisabled(locator)
{
    await expect(locator).toBeDisabled();
}



}