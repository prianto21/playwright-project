import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

setup('authenticate', async ({ page }) => {
    // buka SauceDemo
     await page.goto('https://www.saucedemo.com');
    // buat LoginPage
     const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    // simpan storageState
    await page.context().storageState({
    path: '.auth/user.json'
});
});