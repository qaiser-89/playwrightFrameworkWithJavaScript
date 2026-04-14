import { BasePage } from './BasePage';
export class signupPage extends BasePage {

    constructor(page)
    {
        super(page);
        this.page = page;
        this.name = this.page.getByRole('textbox', { name: 'Name' });
        this.email = this.page.getByRole('textbox', { name: 'Email' });
        this.password = this.page.getByRole('textbox', { name: 'Password' });
        this.allInterests = this.page.locator("//label[@class='interest']");
        this.allGenders = this.page.locator("//div[@class='gender-div']");

    }

async enterName(name)
{
  await  this.name.fill(name);
}

async enteremail(email)
{
  await  this.email.fill(email);   
}

async enterPassword(pass)
{
   await this.password.fill(pass);
}

async selectIntrest()
{
    const numberOfInterests = await this.allInterests.count();
    console.log("Number of interests: " + numberOfInterests);
    for(let i = 0; i<numberOfInterests; i++)
    {
       console.log(await this.allInterests.nth(i).textContent());
       if(await this.allInterests.nth(i).textContent() === "Ruby")
         {await this.allInterests.nth(i).click();
         break;
         }
       
    }
}

async selectGender()
{
    const numberOfGenders = await this.allGenders.count();
    console.log("Number of genders: " + numberOfGenders);
    for(let i = 0; i<numberOfGenders; i++)
    {
       console.log(await this.allGenders.nth(i).textContent());
       
       if(await this.allGenders.nth(i).textContent() === "Male")
         {
            await this.allGenders.nth(i).click();
         break;
         }
    }
}



}