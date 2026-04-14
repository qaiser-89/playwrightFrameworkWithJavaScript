import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page) //this is because our parent class also has a constructor we need to call that with super keyword
        this.page = page;
        this.email = this.page.locator('#email1');
        this.passwordInput = this.page.locator('#password1');
        this.loginButton = this.page.locator('button[type="submit"]');
        this.signUpButton = this.page.getByRole('link', { name: 'New user? Signup' })
    }
async enteremail(email) {
        await this.email.fill(email);
    }

async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

async clickLoginButton() {
        await this.loginButton.click();
    }   

async clickSignUpButton(){
    await this.signUpButton.click();
}


}