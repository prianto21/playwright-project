import { test, expect } from "@playwright/test";

test("Login successfully", async ({ request }) => {

    const response = await request.post(
        "https://reqres.in/api/login",
        {
            data: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.token).toBeDefined();
});


test("Login failed with invalid credentials", async ({ request }) => {

    const response = await request.post(
        "https://reqres.in/api/login",
        {
            data: {
                email: "wrong@email.com",
                password: "wrongpassword"
            }
        }
    );

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.error).toBeDefined();
});