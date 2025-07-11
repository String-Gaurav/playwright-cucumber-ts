import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorldType } from "../../tests/world";
import {GoogleHomepage } from "../../pages/GoogleHomepage";
Given("I launch the browser", async function (this: CustomWorldType) {
  await this.init();
});

When("I go to {string}", async function (this: CustomWorldType, url: string) {
  await this.page.goto(url);
   await this.page.waitForSelector('button:has-text("Accept all")', { timeout: 3000 });
            await this.page.click('button:has-text("Accept all")');
});

Then("the title should contain {string}", async function (this: CustomWorldType, expectedTitle: string) {
  const title = await this.page.title();
  console.log("print the title", title);
  expect(title).toContain(expectedTitle);
});

Then("close the browser {string}", async function (this: CustomWorldType, text:string) {
  const googleHomepage = new GoogleHomepage(this.page); 
  googleHomepage.enterSearch(text)
});