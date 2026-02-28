import {test} from "@playwright/test"

test("amazon-task-2", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  await page.locator('(//i[@class="a-icon a-icon-checkbox"])[2]').click()
  let price=await page.locator('(//span[@class="a-price-whole"])[4]').first().innerText()
  let name=await page.locator('(//h2[contains(@class,"a-size-base")])[5]/span').textContent();
  let time=new Date().getTime()
  await page.screenshot({path:`screenshot/task5-sc-${time}.png`})
  console.log(price);
  console.log(name);
})