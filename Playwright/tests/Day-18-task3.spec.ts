import { test} from '@playwright/test'

test("task-3" , async({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('D:/WrokSpace/Capg-Assessment/Playwright/testing-data/task-1-1-chromium-win32.png')
    await page.locator('#file-submit').click()
    await page.waitForTimeout(3000)
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day18-task3-sc-${time}.png`})
})