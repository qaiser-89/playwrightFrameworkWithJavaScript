import {test as base, expect} from '@playwright/test'
import {LoginPage} from "../pages/loginPage"
import {SignupPageWithFixtureTry} from '../pages/SignupPageWithFixtureTry';
import {dashboardPage} from '../pages/dashboardPage';
import {manageCoursePage} from '../pages/manageCoursePage';
import {cartPage} from '../pages/cartPage';


const test = base.extend({

 loginPage: async ({page}, use)=> {
    
    const loginPage = new LoginPage(page)
    
//whatever we write before use(like below) will be executed before each test.
    await use(loginPage)
// whatever we write after use is executed after each test.
},

signupPageWithFixture: async({page},use)=> {
    const signupPage = new SignupPageWithFixtureTry(page)
     await use(signupPage)
},

DashboardPage: async({page},use)=> {
    const dashPage = new dashboardPage(page)
    await use(dashPage)

},

CartPage: async({page},use)=> {
    const CartPage  = new cartPage(page)
     await use(CartPage)
},
ManageCoursePage: async({page}, use)=> {
    const ManageCoursePage = new manageCoursePage(page)
    await use(ManageCoursePage)
}

})

export {test, expect}

