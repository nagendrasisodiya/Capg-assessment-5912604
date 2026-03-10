import {expect, test} from "@playwright/test"
test("task-2",async({page})=>{
    await page.goto("https://www.lenskart.com/")
    await page.locator("//button[@id='onetrust-accept-btn-handler']").click();
    await page.locator("//a[@id='lrd9']").hover();
    await page.waitForTimeout(5000)
    await page.locator("//img[@src='https://static5.lenskart.com/media/uploads/bengalore-210126.png']").click()
})