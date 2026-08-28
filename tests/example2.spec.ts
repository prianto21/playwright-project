import { test, expect } from '@playwright/test';


test('Open Google', async ({ page }) => {
    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle(/Google/);
    // await expect(page.getByRole('textbox', { name: 'Search' })).toBeVisible();
    const searchBox = page.getByRole('textbox', { name: 'q' });
    await searchBox.fill('Playwright');
    await expect(searchBox).toHaveValue('Playwright');
});