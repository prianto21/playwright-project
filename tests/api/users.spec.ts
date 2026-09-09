import { test, expect } from "@playwright/test";
import { UserApi } from "../api/UserApi";

test("Get user", async ({ request }) => {

    const userApi = new UserApi(request);

    const response = await userApi.getUser(2);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.id).toBe(2);
    expect(body.data.first_name).toBe("Janet");

});