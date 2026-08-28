import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {
    }

    
    private btnLogin = this.page.getByRole('button', { name: 'LOGIN' });
    // username locator
    private username = this.page.getByPlaceholder('Username');
    // password locator
    private password = this.page.getByPlaceholder('Password');
   

   async login(username: string, password: string) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.btnLogin.click();
}
}