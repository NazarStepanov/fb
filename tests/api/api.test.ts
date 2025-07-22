import { test } from "../../utils/test";

const userEmail = process.env.USER_EMAIL || ''
const userPassword = process.env.USER_PASSWORD || ''

test('should get all bonuses', async ({ api }) => {
    const response = await api.login(userEmail, userPassword);
    console.log(await response);
})