import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class ProductPage {

    constructor(private page: Page) {
    }

    
    async addToCart(productName: string) {
        const cartProduct = this.page.locator('.inventory_item ').filter({ hasText: productName });
        // klik Add to cart pada product tersebut
        await cartProduct.getByRole('button',{name: 'Add to cart'}).click();
    }

     getProduct(productName:string){
        return this.page.getByText(productName);
    }
}




