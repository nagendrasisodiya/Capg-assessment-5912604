import { expect,test } from '@playwright/test';
import * as fs from "node:fs";
import path = require("node:path");
import FileUpload from "../POM-Files/Day-22-task1.pages";

let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/Day-22-task1.json'))
// @ts-ignore
let data = JSON.parse(json_data)

test("task-1",async({page})=>{

    let obj:FileUpload=new FileUpload(page,data)
    await obj.navigate();
    await obj.selectFile();
    await obj.upload();
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day22-task1-sc-${time}.png`})
})