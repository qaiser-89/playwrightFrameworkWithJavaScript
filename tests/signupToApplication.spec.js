import {test} from "../fixtures/fixture.js"
import {generateRandomEmail} from '../utills/helper.js';

test("Signup To Application", async function({loginPage, signupPageWithFixture}){
    await loginPage.goTo("/login");
    await loginPage.clickSignUpButton();
    const email = generateRandomEmail()
    console.log(email)
    await signupPageWithFixture.enterName("Test User");
    await signupPageWithFixture.enteremail(email);
    await signupPageWithFixture.enterPassword("password123");
    await signupPageWithFixture.selectIntrest();
    await signupPageWithFixture.selectGender();

})