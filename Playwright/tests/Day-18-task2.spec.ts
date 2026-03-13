import {test} from "@playwright/test";

test("task-2", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.locator('//input[@id="uploadFile"]').setInputFiles(
        "D:/WrokSpace/Capg-Assessment/Playwright/testing-data/task-1-1-chromium-win32.png"
    )
    await page.locator('//a[@id="downloadButton"]').click()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day18-task3-sc-${time}.png`})
})