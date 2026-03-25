import {expect, Locator, Page} from "@playwright/test";

class Deposit{
    page:Page
    data:any
    accountNoDRP:Locator
    depositBTN1:Locator
    amountFiled:Locator
    submitBTN:Locator
    transcationSuccess:Locator
    getBalance:Locator
    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.accountNoDRP=page.locator('//select[@id="accountSelect"]')
        this.depositBTN1=page.getByRole("button", {name:"Deposit"})
        this.amountFiled=page.getByPlaceholder("amount")
        this.submitBTN=page.locator('//button[@type="submit"]')
        this.transcationSuccess=page.locator('//span[@class="error ng-binding"]')
        this.getBalance=page.locator('(//strong[@class="ng-binding"])[2]')
    }
    async deposit(){
        await this.depositBTN1.click()
        await this.amountFiled.fill(this.data.depositAmount)
        await this.submitBTN.click()
        await expect(this.transcationSuccess).toHaveText("Deposit Successful")
    }
    async validateBalance(){
        let accountBalance=await this.getBalance.textContent()
        if (!accountBalance){
            throw new Error("balance not good")
        }
        return parseInt(accountBalance.trim(), 10)
    }
}
export default Deposit