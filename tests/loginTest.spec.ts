import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {

    // 1. Buka halaman login
    await page.goto('https://www.saucedemo.com');
    // 2. Cari username input
    const username = page.getByPlaceholder('Username')
    // 3. Isi standard_user
    await username.fill('standard_user');
    // 4. Cari password input
    const password = page.getByPlaceholder('Password')
    // 5. Isi secret_sauce
    await password.fill('secret_sauce')
    // 6. Cari tombol Login
    // 7. Klik Login
    // await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'LOGIN' }).click();

    // 8. Verify URL inventory
    await expect(page).toHaveURL(/.*inventory.html/);

});



// Transaction List

// Transaction ID    Status       Action
// ---------------------------------------------
// TRX-1001          SUCCESS      [View]
// TRX-1002          FAILED       [View]
// TRX-1003          SUCCESS      [View]

test('View failed transaction', async ({ page }) => {

      // cari row TRX-1002
    //   const transactionRow1= page.getByRole('row').filter({hasText:'TRX-1002'});
     const transactionRow = page
    .getByRole('row')
    .filter({ hasText: 'TRX-1002' });
    // klik View pada row tersebut
    await transactionRow
    .getByRole('button', { name: 'View' })
    .click();
    // pastikan TRX-1002 muncul
    
    await expect(
        page.getByText('TRX-1002')
    ).toBeVisible();
});


test('Login failed with invalid credential', async ({ page }) => {

    // 1. buka SauceDemo
    await page.goto('https://www.saucedemo.com');
    // 2. isi username dengan credential yang salah
    const username = page.getByPlaceholder('Username')
    // 3. Isi standard_user
    await username.fill('standard_user');
    // 3. isi password
    const password = page.getByPlaceholder('Password')
    await password.fill('wrong_password');

       // 4. klik Login
    await page.getByRole('button', { name: 'LOGIN' }).click();
    // 5. pastikan pesan error muncul
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Logout Test', async ({ page }) => {
     // 1. buka SauceDemo
    await page.goto('https://www.saucedemo.com');
    // 2. isi username dengan credential yang salah
    const username = page.getByPlaceholder('Username')
    // 3. Isi standard_user
    await username.fill('standard_user');
    // 3. isi password
    const password = page.getByPlaceholder('Password')
    await password.fill('secret_sauce');

       // 4. klik Login
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('#react-burger-menu-btn').click();
    await page.getByRole('link',{name:'Logout'}).click();
});
