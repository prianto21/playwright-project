import { test, expect } from "./fixtures";

test.beforeEach(async ({ page }) => {
  console.log("=== BEFORE EACH ===");
  await page.goto("/inventory.html");
});

test.afterEach(async () => {
  console.log("=== AFTER EACH ===");
});

test("View Backpack", async ({ productPage }) => {
  console.log("=== TEST: VIEW BACKPACK ===");

  await expect(
    productPage.getProduct("Sauce Labs Backpack")
  ).toBeVisible();
});

test("View Bike Light", async ({ productPage }) => {
  console.log("=== TEST: VIEW BIKE LIGHT ===");

  await expect(
    productPage.getProduct("Sauce Labs Bike Light")
  ).toBeVisible();
});