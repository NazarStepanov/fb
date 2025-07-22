import { BasePage } from "./base.page";

export class SettingsPage extends BasePage {
    protected get link(): string { return "/personal-office/settings/" }

    private get languageSettings() {
        return this.getByDataRole("settings-language");
    }

    async selectLanguage(language: 'uk' | 'en') {
        await this.languageSettings.click();
        await this.getByDataRole(`option-${language}`).click();
        this.language = language
    }

    async selectColorScheme(scheme: 'dark' | 'light' | 'auto') {
        await this.getByDataRole(`settings-color-scheme-switcher-${scheme}`).click();
    }
}