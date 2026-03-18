import path = require("node:path");
import {expect, Page} from "@playwright/test";

class FileUpload{
    page:Page
    data:any
    chooseFileBTN:any
    uploadFileBTN:any
    uploadedFileNameTF:any
    constructor(page:Page,data:any){
        this.page=page;
        this.data=data;
        this.chooseFileBTN=page.locator('//input[@id="file-upload"]')
        this.uploadFileBTN=page.locator('//input[@id="file-submit"]')
        this.uploadedFileNameTF=page.locator('//div[@id="uploaded-files"]');

    }
    async navigate(){
        await this.page.goto(this.data.url)
    }

    async selectFile(){
        const fullPath=path.join(
            this.data.filePath,this.data.fileName
        );
        await this.chooseFileBTN.setInputFiles(fullPath);
    }
    async upload(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.uploadFileBTN.click()
        ]);
        await expect(this.uploadedFileNameTF).toHaveText(this.data.fileName);
    }

}
export default FileUpload;