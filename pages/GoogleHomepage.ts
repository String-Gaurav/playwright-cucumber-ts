import {Page} from "playwright";

export class GoogleHomepage{
    constructor(private page:Page){}

    async enterSearch(searchText:string){

        await this.page.fill("#APjFqb", searchText);
        await this.page.locator("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click();

    }
}