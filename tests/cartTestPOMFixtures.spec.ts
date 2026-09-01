import { test, expect } from "./fixtures";

test("Add product to cart", async ({productPage ,cartPage}) => {
  await productPage.addToCart("Sauce Labs Backpack");
  await expect(cartPage.getCartBadge()).toHaveText("1");
  await productPage.addToCart("Sauce Labs Bike Light");
  await expect(cartPage.getCartBadge()).toHaveText("2");

  await cartPage.open();
  await expect(cartPage.getProductRow("Sauce Labs Backpack")).toBeVisible();
  await expect(cartPage.getProductRow("Sauce Labs Bike Light")).toBeVisible();
});

test("View product", async ({productPage}) => {
  await expect(productPage.getProduct("Sauce Labs Backpack")).toBeVisible();
});
