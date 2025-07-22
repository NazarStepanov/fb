import { APIRequestContext } from "@playwright/test";

export class FavbetAPI {
    constructor(private readonly reguest: APIRequestContext) { }

    async login(email: string, password: string): Promise<any> {
        const response = await this.reguest.post('/accounting/login', {
            data: {
                username: email,
                password: password,
                captcha: ''
            },
            failOnStatusCode: false
        });
        return response;
    }
}