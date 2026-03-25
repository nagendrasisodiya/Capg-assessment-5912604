import {expect, Locator, Page} from "@playwright/test";

class LoginLogout {
    page:Page
    data:any
    customerLoginBTN:Locator
    nameDRPD:Locator
    userSelect:Locator
    loginBTN:Locator
    logoutButton:Locator
    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.customerLoginBTN=page.getByRole("button", {name:"Customer Login"})
        this.nameDRPD=page.locator('//select[@id="userSelect"]')
        this.userSelect=page.locator('//option[@value="3"]')
        this.loginBTN=page.locator('//button[@type="submit"]')
        this.logoutButton=page.getByRole("button", {name:"Logout"})
    }
    async login(){
        await this.customerLoginBTN.click()
        await this.nameDRPD.selectOption(this.data.username)
        await this.loginBTN.click()
    }
    async logout(){
        await this.logoutButton.click()
    }
}
export default LoginLogout