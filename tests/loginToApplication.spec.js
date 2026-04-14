import {test} from "../fixtures/fixture.js"


test("login To Application Using Valid Credentials", async function({loginPage}){
    loginPage.goTo("/login")
    await loginPage.enteremail("admin@email.com")
    await loginPage.enterPassword("admin@123")
    await loginPage.clickLoginButton()
    await loginPage.assertUrlNotContains("/login/")
})