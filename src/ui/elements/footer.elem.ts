import { Locator } from "@playwright/test";
import { BaseElement } from "./base.elem";

const socialLinksTitles = {
    sport: "Ми в соціальних мережах (спорт)",
    casino: "Ми в соціальних мережах (казино)"
}

export class FooterElement extends BaseElement {
    get baseLocator(): Locator {
        return this.page.locator("[data-role=page-footer-wrapper]");
    }

    private socialLinkLocator(type: "sport" | "casino", name: string): Locator {
        return this.baseLocator.locator(`.menuTitle:text("${socialLinksTitles[type]}") + .footer-socials-list`).getByRole("link", { name: name });
    }

    get socialLinks() {
        return {
            facebookSport: this.socialLinkLocator("sport", "Facebook"),
            youtubeSport: this.socialLinkLocator("sport", "YouTube"),
            instagramSport: this.socialLinkLocator("sport", "Instagram"),
            tiktokSport: this.socialLinkLocator("sport", "TikTok"),
            telegramSport: this.socialLinkLocator("sport", "Telegram"),
            facebookCasino: this.socialLinkLocator("casino", "Facebook"),
            instagramCasino: this.socialLinkLocator("casino", "Instagram"),
            telegramCasino: this.socialLinkLocator("casino", "Telegram"),
        }
    }
}