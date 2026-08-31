import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/cartPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  const loginPage = new LoginPage(page);
  await loginPage.login("standard_user", "secret_sauce");
});

test("Add product to cart", async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  await productPage.addToCart("Sauce Labs Backpack");
  await expect(cartPage.getCartBadge()).toHaveText("1");
  await productPage.addToCart("Sauce Labs Bike Light");
  await expect(cartPage.getCartBadge()).toHaveText("2");

  await cartPage.open();
  await expect(cartPage.getProductRow("Sauce Labs Backpack")).toBeVisible();
  await expect(cartPage.getProductRow("Sauce Labs Bike Light")).toBeVisible();
});

test("View product", async ({ page }) => {
  const productPage = new ProductPage(page);
  await expect(productPage.getProduct("Sauce Labs Backpack")).toBeVisible();
});
