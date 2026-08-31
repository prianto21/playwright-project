import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {
    }

    async open(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    getCartBadge(){
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }

    getProductRow(productName: string){
        return this.page.getByText(productName);
    }
    

}




