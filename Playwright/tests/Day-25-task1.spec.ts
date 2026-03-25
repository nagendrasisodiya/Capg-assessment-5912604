import {test} from "@playwright/test";
import LoginLogout from "../POM-Files/Day-25-task1-login-logout.page";
import path = require("node:path");
import * as fs from "node:fs";
import Deposit from "../POM-Files/Day-25-task1-deposit.page";
import Withdraw from "../POM-Files/Day-25-task1-withdraw.page";
import createCustomer from "../POM-Files/Day-25-task1-createCustomer.page";

let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/Day-25-task1.json'))
let json_data2=fs.readFileSync(path.join(__dirname, '../testing-data/day-25-task1-newcustomer.json'))

// @ts-ignore
let data = JSON.parse(json_data)
// @ts-ignore
let data2=JSON.parse(json_data2)
test("bank-account", async ({page})=>{
    let createCustomerObj:createCustomer=new createCustomer(page, data2)
    let login_logout_Obj=new LoginLogout(page, data)
    let depositObj:Deposit=new Deposit(page, data)
    let withdrawObj:Withdraw=new Withdraw(page, data)
    await createCustomerObj.addCustomer()
    await createCustomerObj.openAccount()
    await login_logout_Obj.login()
    await depositObj.deposit()
    console.log(await withdrawObj.validateBalance())
    await withdrawObj.withDraw()
    console.log(await withdrawObj.validateBalance())
    await login_logout_Obj.logout()
})