import { test, expect } from "../fixtures";
import { UserApi } from "../api/UserApi";

test("Get user", async ({ apiRequest  }) => {

    const userApi = new UserApi(apiRequest );

    const response = await userApi.getUser(2);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.id).toBe(2);
    expect(body.data.first_name).toBe("Janet");

});