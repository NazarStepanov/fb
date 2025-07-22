import { test as baseTest } from '@playwright/test';
import { FavbetUI } from '../src/ui/favbetUI';
import { FavbetAPI } from '../src/api/favbetAPI';

type TestFixtures = {
    favbet: FavbetUI
    api: FavbetAPI
}

export const test = baseTest.extend<TestFixtures>({
    favbet: async ({ page, context }, use) => {
        const favbet = new FavbetUI(page, context);
        await use(favbet);
    },
    api: async ({ request }, use) => {
        const api = new FavbetAPI(request);
        await use(api);
    }
})