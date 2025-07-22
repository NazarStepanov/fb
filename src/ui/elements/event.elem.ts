import { Locator, Page } from "@playwright/test";
import { BaseElement } from "./base.elem";

export class EventElement extends BaseElement {
    constructor(readonly page: Page, readonly index?: number) {
        super(page);
    }

    get baseLocator(): Locator {
        const locator = this.page.locator("[data-role^=event-id-]")
        return this.index !== undefined ? locator.nth(this.index) : locator;
    }

    get starButton(): Locator { return this.getByDataRole("event-favorite-star"); }
    get participants(): Locator { return this.baseLocator.locator("[data-role^=event-participants-name-]"); }
}