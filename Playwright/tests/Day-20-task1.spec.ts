import {test} from "@playwright/test";
import flipkart from "../POM-Files/Day-20-task1.page";
import * as fs from "node:fs";
import path = require("node:path");


let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/Day-20-task1.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test("task1", async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let obj=new flipkart(page)
    await obj.func(data.url)
})