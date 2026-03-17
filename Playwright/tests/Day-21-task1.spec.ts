import {test} from "@playwright/test";
import amazonJobs from "../POM-Files/Day-21-task1.pages";
import path = require("node:path");
import * as fs from "node:fs";


let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/Day-21-task1.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test("task-1", async ({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let jobs=new amazonJobs(page)

    await jobs.jobSearch(data.url)
})