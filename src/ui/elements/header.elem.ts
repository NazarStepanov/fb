import { Locator } from "@playwright/test";
import { BaseElement } from "./base.elem";

export class HeaderElement extends BaseElement {
    get baseLocator(): Locator {
        return this.page.locator("[data-role=c-headerWrapper]");
    }

    // Navigation
    get sportsButton(): Locator { return this.getLink("Спорт") }
    get liveButton(): Locator { return this.getLink("Live") }
    get casinoButton(): Locator { return this.getLink("Казино") }
    get casinoLiveButton(): Locator { return this.getLink("Казино Live") }
    get instantGamesButton(): Locator { return this.getLink("Швидкі Ігри") }
    get cybersportButton(): Locator { return this.getLink("Кіберспорт") }
    get promotionsButton(): Locator { return this.getLink("Акції") }
    // Auth
    get loginButton(): Locator { return this.getLink("Вхід") }
    get signUpButton(): Locator { return this.getLink("Реєстрація") }
    // Profile
    get depositButton(): Locator { return this.getLink("Депозит") }
    get profileButton(): Locator { return this.getByDataRole("c-user"); }
    get userMenu() {
        return {
            profile: this.getLink("Профіль"),
            balance: this.getLink("Баланс"),
            bets: this.getLink("Ставки"),
            bonuses: this.getLink("Бонуси"),
            responsibleGambling: this.getLink("Відповідальна гра"),
            messages: this.getLink("Повідомлення"),
            settings: this.getLink("Налаштування"),
            support: this.getLink("Підтримка 24/7"),
            logout: this.getButton("Вийти")
        }
    }

    async goToProfile(option: keyof typeof this.userMenu) {
        await this.profileButton.click();
        await this.userMenu[option].click();
    }
}