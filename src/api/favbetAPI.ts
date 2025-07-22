// register
// https://www.favbet.ua/accounting/api/saveuser
// email=test00%40test.com&password=Qwer1234&country_id=UA&first_name=%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F&last_name=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F&date_of_birth=1970-01-01&title=mr&question=What%20is%20your%20phone%20number%3F&answer=-&spam_ok=1&agreement_receive_notifications=1&PoliticalStatus=0&coupon=&lang=uk&welcome_pack_id=NaN

import { APIRequestContext } from "@playwright/test";

// login
// https://www.favbet.ua/accounting/login
// {"username":"test00@test.com","password":"Qwer1234","captcha":""}
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