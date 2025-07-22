import { expect } from "@playwright/test";
import { test } from "../../utils/test"

const userEmail = process.env.USER_EMAIL || ''
const userPassword = process.env.USER_PASSWORD || ''

test.beforeEach(async ({ favbet }) => {
    // Given user is logged in
    await favbet.homePage.navigateByUrl();
    await favbet.homePage.header.loginButton.click();
    await favbet.loginPage.login(userEmail, userPassword);
    await favbet.homePage.notification.close();
})

test("should add and remove favorites", async ({ favbet }) => {
    // When user adds events to favorites
    await favbet.homePage.header.liveButton.click()
    let expectedEvents: string[] = []
    for (let i = 0; i < 3; i++) {
        const event = favbet.livePage.getEvent(i);
        expectedEvents.push(await event.participants.textContent() || '');
        await favbet.livePage.getEvent(i).starButton.click();
    }
    await favbet.livePage.favoritesButton.click();
    // Then events are present in favorites
    await favbet.livePage.expectToHaveUrl('/live/favorites/');
    await expect(favbet.livePage.getEvent().baseLocator).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
        await expect(favbet.livePage.getEvent(i).participants).toHaveText(expectedEvents[i]);
    }
    // When user removes events from favorites
    for (let i = 0; i < 3; i++) {
        await favbet.livePage.getEvent(i).starButton.click();
    }
    await favbet.refresh()
    // Then favorites are empty
    await expect(favbet.livePage.getEvent().baseLocator).toHaveCount(0);
})

test('should navigate to Youtube channel', async ({ favbet }) => {
    // When user clicks on Youtube link in footer
    await favbet.homePage.footer.socialLinks.youtubeSport.click();
    // Then user is redirected to Youtube channel
    const youtube = await favbet.getNewTab();
    await expect(youtube).toHaveURL('https://www.youtube.com/@favbetua');
    // When user opens Videos tab
    await youtube.locator('[tab-title=Videos]').click()
    // Then video is present
    const video = youtube.locator('ytd-rich-item-renderer', { hasText: 'FAVBET | Support Those Who Support Us: ENGLAND | 2022 FIFA World Cup' })
    await expect(video).toBeVisible();
})

test('should update language and theme', async ({ favbet }) => {
    // Given user is on settings page
    await favbet.homePage.header.goToProfile('settings');
    await favbet.settingsPage.expectToHaveUrl();
    // When user changes language to en
    await favbet.settingsPage.selectLanguage('en');
    // Then language is updated
    await favbet.settingsPage.expectToHaveUrl()
    // When user changes color scheme to light
    await favbet.settingsPage.selectColorScheme('light');
    // Then color scheme is updated
    await favbet.settingsPage.expectToHaveColorScheme('light');
})