import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false,

       args: [
            '--disable-blink-features=AutomationControlled',
            '--disable-features=VizDisplayCompositor',
            '--disable-web-security',
            '--disable-features=VizDisplayCompositor',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
        
     }); // ✅ set browser here
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }
}

setWorldConstructor(CustomWorld);

export type CustomWorldType = InstanceType<typeof CustomWorld>;
