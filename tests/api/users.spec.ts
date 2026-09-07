import { test, expect } from "@playwright/test";

test("Get user", async ({ request }) => {

    const response = await request.get(
        "https://reqres.in/api/users/2"
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.id).toBe(2);
    expect(body.data.first_name).toBe("Janet");

});