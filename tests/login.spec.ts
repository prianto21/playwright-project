import { test, expect } from '@playwright/test';

// <input type="text" aria-label="Username">
// <input type="password" aria-label="Password">
// <button>Login</button>

test('Login', async ({ page }) => {

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

    await expect (page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});


// Transaction List

// Transaction ID    Status       Action
// ---------------------------------------------
// TRX-1001          SUCCESS      [View]
// TRX-1002          FAILED       [View]
// TRX-1003          SUCCESS      [View]
