import { test } from "@playwright/test"

test("handle js dialogs", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.once("dialog", async d => {
        console.log(d.message())
        await d.accept()
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
    page.once("dialog", async d => {
        console.log(d.message())
        await d.dismiss()
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
    page.once("dialog", async d => {
        console.log(d.message())
        await d.accept("Playwright Testing")
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
})
