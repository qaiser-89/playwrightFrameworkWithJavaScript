import {test} from "../fixtures/fixture.js"
import loginData from "../testData/loginTestData.json"
import CourseData from "../testData/manageCourseData.json"

test.describe("Tests relating to Create New Course",async function(){
    
test(`Create New Course`,async({loginPage, DashboardPage, ManageCoursePage})=>{

    loginPage.goTo("/login")
    await loginPage.enteremail(loginData.email)
    await loginPage.enterPassword(loginData.password)
    await loginPage.clickLoginButton()
    await loginPage.assertUrlNotContains("/login/")
    await DashboardPage.hoverManage()
    await DashboardPage.clickmanageButtonText()
    await ManageCoursePage.clickOnNewCourseButton()
    await ManageCoursePage.enterCourseImage(CourseData.courseImage)
    await ManageCoursePage.enterCourseName(CourseData.name)
    await ManageCoursePage.enterCourseDescription(CourseData.Description)
    await ManageCoursePage.enterInstructorName(CourseData.instructorName)
    await ManageCoursePage.enterCoursePrice(CourseData.price)
    await ManageCoursePage.selectCourseStartDate('25')
    await ManageCoursePage.selectCourseEndDate(CourseData.endDate, '21')
    await ManageCoursePage.selectCourseCategory(CourseData.Category)
   // await ManageCoursePage.createCourse()
    })





})