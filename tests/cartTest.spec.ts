import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

    // 1. buka SauceDemo
    await page.goto('https://www.saucedemo.com');
     // 2. login dengan credential valid
    const username = page.getByPlaceholder('Username')
    await username.fill('standard_user');
    const password = page.getByPlaceholder('Password')
    await password.fill('secret_sauce')
    await page.getByRole('button', { name: 'LOGIN' }).click();
    // 3. cari Sauce Labs Backpack
    const cartProduct = page.locator('.inventory_item ').filter({ hasText: 'Sauce Labs Backpack' });
   console.log(await cartProduct.count());
    // 4. klik Add to cart pada product tersebut
    await cartProduct.getByRole('button',{name: 'Add to cart'}).click();
    //verify badge become 1

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

     const cartProductTwo = page.locator('.inventory_item ').filter({ hasText: 'Sauce Labs Bike Light' });
   console.log(await cartProductTwo.count());
    // 4. klik Add to cart pada product tersebut
    await cartProductTwo.getByRole('button',{name: 'Add to cart'}).click();
    //verify badge become 2
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

    console.log('URL:', page.url());
    console.log(
    'Cart count:',
    await page.locator('[data-test="shopping-cart-link"]').count()
);
    // 5. buka Cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    // 6. pastikan Sauce Labs Backpack ada di cart 
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
});