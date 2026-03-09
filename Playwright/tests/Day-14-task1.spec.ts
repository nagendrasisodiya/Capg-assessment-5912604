import {expect, test} from "@playwright/test";

test("task-1", async ({page})=>{
    page.setDefaultTimeout(20000)

    await page.goto("https://demoapps.qspiders.com/ui/login")
    expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")

    await page.getByLabel("Email Id").fill("student@gmail.com")
    let name = await page.getByLabel("Email Id").inputValue()
    expect(name).toBe("student@gmail.com")

    await page.getByLabel("Password").fill("student123")
    await page.getByRole("button", {name:"Login"}).click()

    await expect(page).toHaveScreenshot();

    // let time=new Date().getTime()
    // await page.screenshot({path:`screenshot/day14-task1-sc-${time}.png`})
})