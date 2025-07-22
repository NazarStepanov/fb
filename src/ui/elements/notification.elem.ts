import { BaseElement } from "./base.elem";

export class NotificationElement extends BaseElement {
    get baseLocator() {
        return this.page.locator("[data-role=not-verified-user-notification]");
    }

    get closeButton() {
        return this.getByDataRole("icon-notification-close");
    }

    get message() {
        return this.getByDataRole("not-verified-user-notification-message");
    }

    async close() {
        await this.closeButton.click();
    }
}