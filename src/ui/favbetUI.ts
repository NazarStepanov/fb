import { BrowserContext, Page } from "@playwright/test";
import { HomePage } from "./pages/home.page";
import { LoginPage } from "./pages/login.page";
import { LivePage } from "./pages/live.page";
import { SettingsPage } from "./pages/settings.page";

export class FavbetUI {
    constructor(private readonly page: Page, private readonly context: BrowserContext) { }

    get homePage() { return new HomePage(this.page) }
    get loginPage() { return new LoginPage(this.page) }
    get livePage() { return new LivePage(this.page) }
    get settingsPage() { return new SettingsPage(this.page) }

    async refresh() {
        await this.page.reload();
    }

    async getNewTab() {
        return await this.context.waitForEvent('page')
    }
}