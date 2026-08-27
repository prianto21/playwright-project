import { test, expect } from '@playwright/test';

// <input type="text" aria-label="Username">
// <input type="password" aria-label="Password">
// <button>Login</button>

test('LoginTest', async ({ page }) => {

    // 1. buka halaman login

    // 2. ambil username
    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    // 3. isi username dengan "alex"
    await usernameInput.fill('alex');
    // 4. ambil password
    const passwordInput = page.getByLabel('password')
    // 5. isi password dengan "123456"
    await passwordInput.fill('123456'); 
    // 6. ambil button Login
    const loginButton = page.getByRole('button', { name: 'Login' });
    // 7. klik Login
    await loginButton.click();
});

test('Successful login', async ({ page }) => {

    // 1. Buka halaman login
    await page.goto('/');
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
    await page.getByRole('button', { name: 'Login' }).click();
    // 8. Verify URL inventory
    await expect(page).toHaveURL(/.*inventory.html/);

});



// Transaction List

// Transaction ID    Status       Action
// ---------------------------------------------
// TRX-1001          SUCCESS      [View]
// TRX-1002          FAILED       [View]
// TRX-1003          SUCCESS      [View]

// test('view failed details', async ({ page }) => {

//    const transactionRow = page
//     .getByRole('row')
//     .filter({ hasText: 'TRX-1002' });

//     await transactionRow
//     .getByRole('button', { name: 'View' })
//     .click();

//     await expect(
//         page.getByText('TRX-1002')
//     ).toBeVisible();
// });