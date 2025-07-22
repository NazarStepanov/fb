import { Locator, Page } from "@playwright/test";

export abstract class BaseElement {
    constructor(readonly page: Page) { }

    abstract get baseLocator(): Locator

    protected getLink(name: string): Locator {
        return this.baseLocator.getByRole("link", { name: name, exact: true });
    }

    protected getButton(name: string): Locator {
        return this.baseLocator.getByRole("button", { name: name, exact: true });
    }

    protected getByDataRole(role: string): Locator {
        return this.baseLocator.locator(`[data-role="${role}"]`);
    }
}