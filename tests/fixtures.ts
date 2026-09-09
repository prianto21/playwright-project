import { test as base ,request,APIRequestContext } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

type MyFixtures = {
  productPage: ProductPage;
   cartPage: CartPage;
   cartPageDependency: CartPage;
   apiRequest: APIRequestContext;
};
  // UI FIXTURE
export const test = base.extend<MyFixtures>({
  productPage: async ({ page }, use) => {
     await page.goto('/inventory.html');
    const productPage = new ProductPage(page);

    await use(productPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },

  cartPageDependency: async ({ productPage }, use) => {
    const cartPageDependency = new CartPage(productPage['page']);
    await use(cartPageDependency);
  },

  //   // API FIXTURE
    apiRequest: async ({}, use) => {

    const apiRequest = await request.newContext({
      baseURL: "https://reqres.in",
    });

    await use(apiRequest);

    await apiRequest.dispose();
  },
});

export { expect } from "@playwright/test";