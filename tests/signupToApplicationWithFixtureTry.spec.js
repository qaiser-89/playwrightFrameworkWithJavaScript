import {test} from '../fixtures/fixture.js'
import {generateRandomEmail} from '../utills/helper.js';
import testData from '../testData/registerUserData.json';

test.describe("Tests relating to Signup To Application", async function(){

 for(const data of testData) {
    test(`Signup To Application ${data.testid}`, async ({signupPageWithFixture, loginPage}) => {
        await loginPage.goTo("/login");
        await loginPage.clickSignUpButton();
        await signupPageWithFixture.enterName(data.name);
        const email = generateRandomEmail();
        console.log(email);
        await signupPageWithFixture.enteremail(email);
        await signupPageWithFixture.enterPassword(data.password);
        await signupPageWithFixture.selectIntrest(data.interest);
        await signupPageWithFixture.selectGender(data.gender);
    })
 }

})

