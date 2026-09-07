import { test, expect } from "@playwright/test";

const loginData = [
    {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
        expectedStatus: 200,
        expectedResult: "success",
    },
    {
        email: "wrong@email.com",
        password: "wrongpassword",
        expectedStatus: 400,
        expectedResult: "error",
    },
];

for (const data of loginData) {

    test(
        `Login API - ${data.expectedResult}`,
        async ({ request }) => {

            const response = await request.post(
                "https://reqres.in/api/login",
                {
                    data: {
                        email: data.email,
                        password: data.password,
                    },
                }
            );

            expect(response.status())
                .toBe(data.expectedStatus);

            const body = await response.json();

            if (data.expectedResult === "success") {
                expect(body.token).toBeDefined();
            }

            if (data.expectedResult === "error") {
                expect(body.error).toBeDefined();
            }
        }
    );
}