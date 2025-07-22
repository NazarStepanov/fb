import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private readonly page: Page) { }

    get link(): string { return '/login'; }
    get emailInput() { return this.page.getByRole('textbox', { name: 'Електронна пошта' }) }
    get passwordInput() { return this.page.getByRole('textbox', { name: 'Пароль' }) }
    get submitButton() { return this.page.getByRole('button', { name: 'Увійти' }) }

    async open() {
        await this.page.goto(this.link);
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}