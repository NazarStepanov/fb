import { expect, Locator, Page } from "@playwright/test";
import { HeaderElement } from "../elements/header.elem";
import { NotificationElement } from "../elements/notification.elem";
import { FooterElement } from "../elements/footer.elem";

export abstract class BasePage {
    constructor(readonly page: Page) { }

    protected abstract get link(): string
    private static _language: 'uk' | 'en' = 'uk';
    get lanaguage(): string { return BasePage._language; }
    set language(value: 'uk' | 'en') { BasePage._language = value; }

    get header(): HeaderElement { return new HeaderElement(this.page) }
    get footer(): FooterElement { return new FooterElement(this.page) }
    get notification(): NotificationElement { return new NotificationElement(this.page) }

    protected getByDataRole(role: string): Locator {
        return this.page.locator(`[data-role="${role}"]`);
    }

    async navigateByUrl() {
        await this.page.goto(this.link);
    }

    async expectToHaveUrl(path?: string) {
        path = `/${this.lanaguage}${path ?? this.link}`;
        await expect(this.page).toHaveURL(path);
    }

    async expectToHaveColorScheme(scheme: 'dark' | 'light') {
        await expect(this.page.locator('html')).toHaveAttribute('style', new RegExp(`color-scheme: ${scheme};`));
    }
}