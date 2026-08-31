import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',

        launchOptions: {
            slowMo: 1000,
        },
    },

    projects: [
        {
            name: 'setup',
            testMatch: /auth\.setup\.ts/,
        },

        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],
                storageState: '.auth/user.json',
            },

            dependencies: ['setup'],
        },
    ],
});