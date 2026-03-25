import {expect, Locator, Page} from "@playwright/test";

class Withdraw{
    page:Page
    data:any
    withDrawBTN1:Locator
    amountFiled:Locator
    submitBTN:Locator
    transactionSuccess:Locator
    getBalance:Locator
    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.withDrawBTN1=page.getByRole("button", {name:"Withdrawl"})
        this.amountFiled=page.getByPlaceholder("amount")
        this.submitBTN=page.locator('//button[@type="submit"]')
        this.transactionSuccess=page.locator('//span[@class="error ng-binding"]')
        this.getBalance=page.locator('(//strong[@class="ng-binding"])[2]')

    }
    async withDraw(){
        await this.withDrawBTN1.click()
        await this.amountFiled.fill(this.data.withdrawAmount)
        await this.submitBTN.click()
        await this.transactionSuccess.waitFor({ state: 'visible' })
        // await expect(this.transactionSuccess).toHaveText("Transaction successful", {timeout:1000})
    }
    async validateBalance(){
        let accountBalance=await this.getBalance.textContent()
        if (!accountBalance){
            throw new Error("balance not good")
        }
        return parseInt(accountBalance.trim(), 10)
    }
}
export default Withdraw