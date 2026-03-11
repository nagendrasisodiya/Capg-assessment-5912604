import { test, expect } from "@playwright/test";

test("task-1", async ({ page }) => {
    await page.goto("https://www.automationtesting.co.uk/dropdown.html")
    await page.locator('//select[@id="cars"]').click()
    const cars = await page.locator('//select[@id="cars"]/option').all()
    const actual = []
    for (const car of cars) {
        actual.push(await car.textContent())
    }
    const expected = [
        "Audi",
        "BMW",
        "Ford",
        "Honda",
        "Jeep",
        "Mercedes",
        "Suzuki",
        "Volkswagen"
    ]
    expect(actual).toEqual(expected)
    console.log("cars:", actual)

    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day16-task1-sc-${time}.png`})
})