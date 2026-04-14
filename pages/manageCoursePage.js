import { BasePage } from "./BasePage"


export class manageCoursePage extends BasePage {

    constructor(page) {
        super(page)
        this.page = page
        this.addNewCourseButton = this.page.getByRole("button", { name: "Add New Course" })
        this.coursethumbmail = this.page.locator("#thumbnail")
        this.courseName = this.page.locator("#name")
        this.courseDescription = this.page.locator("#description")
        this.instructorName = this.page.locator("#instructorNameId")
        this.coursePrice = this.page.locator("#price")
        this.courseStartDate = this.page.locator("//input[@name='startDate']")
        this.startMotnthPicker = this.page.locator("//div[@class='react-datepicker__current-month']")
        this.nextMonthButton = this.page.getByRole('button', { name: 'Next Month' })
        this.datePicker = this.page.locator(`//div[.='21']`)
        this.courseEndDate = this.page.locator("//input[@name='endDate']")
        this.selectCategory = this.page.getByText('Select Category', { exact: true })
        this.createCourseButton = this.page.getByRole('button', { name: 'Playwright' })
        
    }

    async createNewCourse(courseName,courseDescription, coursePrice, courseImage) {
        await this.addNewCourseButton.click()
        await this.courseName.fill(courseName)
        await this.courseDescription.fill(courseDescription)
        await this.coursePrice.fill(coursePrice)
        await this.courseStartDate.fill("")
        await this.courseEndDate.fill("")
        await this.coursethumbmail.setInputFiles(courseImage)
        await this.selectCategory.click()
        await this.createCourseButton.click()
    }

      async clickOnNewCourseButton()
    {
        await this.addNewCourseButton.click()
    }

    async enterCourseImage(courseImage)
    {
        await this.coursethumbmail.setInputFiles(courseImage)
    }

  

    async enterCourseName(courseName)
    {
    await this.courseName.fill(courseName)
    }

    async enterCourseDescription(courseDescription)
    {
        await this.courseDescription.fill(courseDescription)
    }

    async enterInstructorName(instructorName)
    {
        await this.instructorName.fill(instructorName)
    }

    async enterCoursePrice(coursePrice)
    {
        await this.coursePrice.fill(coursePrice)
    }


    async selectCourseStartDate(startDate)
    {
        await this.courseStartDate.click()

        console.log(await this.startMotnthPicker.textContent())
      let currentMonth = await this.startMotnthPicker.textContent()

    while (currentMonth !== "October 2026") {
        await this.nextMonthButton.click();
        currentMonth = await this.startMotnthPicker.textContent()
        console.log(await this.startMotnthPicker.textContent())
        
    }
        
       // await this.courseStartDate.fill(startDate)
    }

    async selectCourseEndDate(endDate)
    {
        await this.courseEndDate.click()
          console.log(await this.startMotnthPicker.textContent())
      let currentMonth = await this.startMotnthPicker.textContent()

    while (currentMonth !== "October 2027") {
        await this.nextMonthButton.click();
        currentMonth = await this.startMotnthPicker.textContent()
        console.log("End Date Picker is Working: "+await this.startMotnthPicker.textContent())
    }
        await this.datePicker.click()
    }


    async selectCourseCategory()
    {
        await this.selectCategory.click()
    }

    async createCourse()
    {
        await this.createCourseButton.click()
    }

}