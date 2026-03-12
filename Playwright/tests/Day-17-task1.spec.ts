import {expect, test} from "@playwright/test"

test("task-1",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("mobiles")
    await page.keyboard.press("Enter")

    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("(//div[@data-cy='asin-faceout-container'])[1]/descendant::div[@data-cy='image-container']").click()
    ])
    const tittle=await page2.locator("//h1[@id='title']").textContent()
    console.log(tittle);
    await expect(page2.locator("//h1[@id='title']")).toBeVisible();
    await page2.close()
    await expect(page).toHaveURL(/amazon/)
})
