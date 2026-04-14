import { BasePage } from "./BasePage";


export class dashboardPage  extends BasePage{

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
   constructor(page)
    {
        super(page)
        this.page = page
        this.manageMenu = this.page.locator(`//div[@class='nav-menu-item-manage']`)
        this.manageCoursesLink = this.page.getByAltText('manage course',{exact: true})
        this.manageCategoryLink = this.page.getByText("Manage Categories", {exact: true})
        
    }


async hoverManage(){
    await this.manageMenu.hover()
}

async clickManage(){
    await this.manageMenu.click()
}

async clickmanageButtonText(){
    await this.manageCoursesLink.click()
}

async navigateToManageCoursesPage(){
    await this.hoverManage()
    await this.clickmanageButtonText()
}

async navigateToManageCategoryPage()
{
//Promise.all will wait for all the promises to resolve in this case open a new tab(page) and alert
    const [newTab] = await Promise.all([
        this.page.waitForEvent('popup'),// wait for event works with both popup or page we can use popup or page no metter!
        this.manageCategoryLink.click()
    ])
await newTab.waitForLoadState("networkidle")
console.log("new Tab Title is: "+await newTab.title());
console.log("new Tab URL is: "+ newTab.url());
return new categoryPage(newTab)// return the page object to be used in other functions this is called page chaining same thing we used to do in JAVA Selenium and we do not need to create a fixture for this page after using this method in our test!
}






}