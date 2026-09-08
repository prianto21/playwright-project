import { test, expect } from "@playwright/test";
import { UserSchema } from "../../schemas/user.schema";

test("Validate user contract", async ({ request }) => {

    const response = await request.get(
        "https://reqres.in/api/users/2"
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    UserSchema.parse(body.data);
});