import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.beforeEach(async({page})=>{
     await page.goto('https://www.saucedemo.com');
     const loginPage = new LoginPage(page);
     await loginPage.login('standard_user', 'secret_sauce');
    
});

test('Add product to cart', async ({ page }) => {

    const cartProduct = page.locator('.inventory_item ').filter({ hasText: 'Sauce Labs Backpack' });
    console.log(await cartProduct.count());
    // klik Add to cart pada product tersebut
    await cartProduct.getByRole('button',{name: 'Add to cart'}).click();
    //verify badge become 1
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    
    const cartProductTwo = page.locator('.inventory_item ').filter({ hasText: 'Sauce Labs Bike Light' });
     //. klik Add to cart pada product tersebut
    await cartProductTwo.getByRole('button',{name: 'Add to cart'}).click();
    //verify badge become 2
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
   
    //  buka Cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    //  pastikan Sauce Labs Backpack ada di cart 
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
});

test('View product', async ({ page }) => {
    await expect(
        page.getByText('Sauce Labs Backpack')
    ).toBeVisible();
});