import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { loginData } from "./test-data/loginData";

for (const data of loginData) {
  test(
    `Login - ${data.username} - ${data.expectedResult}`,
    async ({ page }) => {

      const loginPage = new LoginPage(page);

      await test.step("Open login page", async () => {
        await page.goto("/");
      });

      await test.step("Enter credentials", async () => {
        await loginPage.login(
          data.username,
          data.password
        );
      });

      await test.step("Verify login result", async () => {

        if (data.expectedResult === "success") {
          await expect(page).toHaveURL(/inventory/);
        }

        if (data.expectedResult === "invalid_credentials") {
          await expect(
            page.locator('[data-test="error"]')
          ).toContainText(
            "Username and password do not match"
          );
        }

        if (data.expectedResult === "locked") {
          await expect(
            page.locator('[data-test="error"]')
          ).toContainText("locked out");
        }

      });
    }
  );
}