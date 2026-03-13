import { test } from "@playwright/test"
// @ts-ignore
import excel from "exceljs"
import path = require("node:path");

test("task-1", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../testing-data/excel_data.xlsx"))
    let sheet = book.getWorksheet("Sheet1")
    for (let i = 2; i <= sheet!.actualRowCount; i++) {
        let row = sheet!.getRow(i)
        let url = row.getCell(1).toString()
        let firstName = row.getCell(2).toString()
        let lastName = row.getCell(3).toString()
        let email = row.getCell(4).toString()
        let gender = row.getCell(5).toString()
        let mobile = row.getCell(6).toString()
        let address = row.getCell(7).toString()
        await page.goto(url)
        await page.locator("#firstName").fill(firstName)
        await page.locator("#lastName").fill(lastName)
        await page.locator("#userEmail").fill(email)
        await page.locator(`//label[text()='${gender}']`).click()
        await page.locator("#userNumber").fill(mobile)
        await page.locator("#currentAddress").fill(address)
        await page.locator("#submit").click()
        await page.waitForTimeout(2000)
        let time=new Date().getTime()
        await page.screenshot({path:`screenshot/day18-task1-sc-${time}.png`})    }
})