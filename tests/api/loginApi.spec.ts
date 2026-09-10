import { test, expect } from "../fixtures";
import { LoginResponseSchema } from "../../schemas/login.schema";

test("Login API - success", async ({ loginApi }) => {

    const response = await loginApi.login(
        "eve.holt@reqres.in",
        "cityslicka"
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    // expect(body.token).toBeDefined();
    LoginResponseSchema.parse(body);
});



test("Login API - missing password", async ({ loginApi }) => {

    const response = await loginApi.loginWithoutPassword(
        "eve.holt@reqres.in"
    );

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.error).toBeDefined();
});