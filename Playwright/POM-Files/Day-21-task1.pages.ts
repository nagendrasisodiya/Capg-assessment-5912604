class amazonJobs{
    careersPage:any
    studentOpportunities:any
    openUniRoles:any
    country:any
    stateSF:any
    citySF:any
    etypeCXB:any
    category:any
    cArea:any
    page:any
    team:any
    role:any
    job2:any
    applyBTN:any
    constructor(page:any) {
        this.page=page
        this.careersPage=page.locator('//a[@class="nav_a" and .="Careers"]')
        this.studentOpportunities=page.locator('//a[@aria-label="Student opportunities" and .="Find your role"]')
        this.openUniRoles=page.locator('//div[@class="css-n1m10m" and .="Find open university roles"]')
        this.country=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Germany"]')
        this.stateSF = page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[text()="Berlin"]').first()
        this.citySF=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Munich"]')
        this.etypeCXB=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Full time"]')
        this.category=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Software Development"]')
        this.cArea=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Corporate"]')
        this.team=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Internships for students"]')
        this.role=page.locator('//label[@class="filter-value-module_root__YfMaD"]/span/div[ text()="Individual contributor"]')
        this.job2=page.locator('//a[@class="header-module_desktop__Dnj66 header-module_title__9-W3R"]').nth(2)
        this.applyBTN=page.locator('//a[@id="apply-button"]')
    }

    async jobSearch(url:string){
        await this.page.goto(url)
        await this.careersPage.waitFor({ state: 'visible', timeout: 5000 })
        await this.careersPage.click()
        this.studentOpportunities.click()
        await this.openUniRoles.click()
        await this.country.click()
        await this.stateSF.click()
        await this.citySF.click()
        await this.etypeCXB.click()
        await this.category.click()
        await this.cArea.click()
        await this.team.click()
        await this.role.click()

        const [new_page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.job2.click()
        ]);
        let obj1 = new amazonJobs(new_page1)
        await obj1.applyBTN.click()
        await obj1.page.waitForTimeout(3000)
        let time=new Date().getTime()
        await this.page.screenshot({path:`screenshot/day21-task1-sc-${time}.png`})
}
}
export default amazonJobs