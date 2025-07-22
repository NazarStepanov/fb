import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: `.env` })

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: '50%',
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    locale: 'en'
  },
  projects: [
    {
      name: 'chromium',
      testMatch: '*/tests/ui/*',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testMatch: '*/tests/ui/*',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testMatch: '*/tests/ui/*',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'api',
      testMatch: '*/tests/api/*',
      use: { baseURL: process.env.API_BASE_URL || process.env.BASE_URL },
    },
  ],
});
