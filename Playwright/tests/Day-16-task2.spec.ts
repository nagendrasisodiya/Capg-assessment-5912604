import {expect, test} from "@playwright/test"

test("task-2",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("//input[@data-test='login-button']").click()
    await page.locator("//select[@class='product_sort_container']").click();
    await page.locator("//select[@class='product_sort_container']").selectOption({value:"lohi"})
    await page.screenshot({path:"./screenshots/sortedProducts.png"})
    await page.locator("//div[@data-test='inventory-list']").hover()
    await page.locator("//div[@data-test='inventory-list']/descendant::div[@data-test='inventory-item-description']/div[@class='pricebar']/descendant::button").first().click();
    const text=await page.locator("//div[@data-test='inventory-list']/descendant::div[@data-test='inventory-item-description']/div[@class='pricebar']/descendant::button").first().textContent()
    expect(text).toContain("Remove")
    const cartSize=await page.locator("//a[@data-test='shopping-cart-link']/child::span").textContent()
    expect(cartSize).toContain("1")

    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day16-task2-sc-${time}.png`})
})