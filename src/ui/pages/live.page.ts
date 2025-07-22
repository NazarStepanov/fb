import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { EventElement } from "../elements/event.elem";

export class LivePage extends BasePage {
    protected get link(): string { return "/live/all" }

    get favoritesButton(): Locator { return this.getByDataRole("sports-favorites-link") }

    getEvent(index?: number): EventElement { return new EventElement(this.page, index) }
}