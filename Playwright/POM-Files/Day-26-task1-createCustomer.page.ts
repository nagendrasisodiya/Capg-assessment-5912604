import {Locator, Page} from "@playwright/test";

class createCustomer{
    page:Page
    data:any
    bankManagerBTN:Locator
    addCustomerBTN:Locator
    firstNameFLD:Locator
    lastNameFLD:Locator
    pinFILD:Locator
    submitBTN:Locator
    openAccountBTN:Locator
    customerNameDRPD:Locator
    currencyDRPD:Locator
    homeBTN:Locator
    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.bankManagerBTN=page.getByRole("button", {name:"Bank Manager Login"})
        this.addCustomerBTN=page.getByRole("button", {name:"Add Customer"})
        this.firstNameFLD=page.getByPlaceholder("First Name")
        this.lastNameFLD=page.getByPlaceholder("Last Name")
        this.pinFILD=page.getByPlaceholder("Post Code")
        this.submitBTN=page.locator('//button[@type="submit"]')
        this.openAccountBTN=page.getByRole("button", {name:"Open Account"})
        this.customerNameDRPD=page.locator('//select[@id="userSelect"]')
        this.currencyDRPD=page.locator('//select[@id="currency"]')
        this.homeBTN=page.getByRole("button", {name:"Home"})
    }
    async addCustomer(){
        await this.page.goto(this.data.url)
        await this.bankManagerBTN.click()
        await this.addCustomerBTN.click()
        await this.firstNameFLD.fill(this.data.firstName)
        await this.lastNameFLD.fill(this.data.lastName)
        await this.pinFILD.fill(this.data.postCode)
        this.page.once("dialog", async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })
        await this.submitBTN.click()
        await this.page.waitForTimeout(5000)
    }
    async openAccount(){
        await this.openAccountBTN.click()
        let name:string=this.data.firstName+" "+this.data.lastName
        await this.customerNameDRPD.selectOption(name)
        await this.currencyDRPD.selectOption(this.data.currency)
        this.page.once("dialog", async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })
        await this.submitBTN.click()
        await this.homeBTN.click()
    }
}
export default createCustomer