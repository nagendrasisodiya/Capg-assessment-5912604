import {expect, test} from "@playwright/test";

test("task-2", async ({page})=>{

    await page.goto("https://www.flipkart.com/")
    expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")

    await page.locator('//span[@class="b3wTlE"]').click()
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("shoes")
    await page.locator('(//button[@class="XFwMiH"])[1]').click()
    await page.waitForTimeout(4000);
    await page.locator('//a[contains(text(),"Women")]').first().click()
    await expect(page).toHaveScreenshot("women-shoes.png");

    await expect(page).toHaveScreenshot();

    // let time=new Date().getTime()
    // await page.screenshot({path:`screenshot/day14-task2-sc-${time}.png`})
})