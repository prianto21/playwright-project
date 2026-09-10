import { test, expect } from "../fixtures";
import { LoginResponseSchema, LoginErrorSchema} from "../../schemas/login.schema";

const loginCases = [
  {
    name: "success",
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    expectedStatus: 200,
    schema: LoginResponseSchema,
  },
  {
    name: "missing password",
    email: "eve.holt@reqres.in",
    password: undefined,
    expectedStatus: 400,
     schema: LoginErrorSchema,
  },
];

for (const testCase of loginCases) {

  test(`Login API - ${testCase.name}`, async ({ loginApi }) => {

    const response = await loginApi.loginRevamp({
      email: testCase.email,
      password: testCase.password,
    });
    expect(response.status()).toBe(testCase.expectedStatus);
    const body = await response.json();
    testCase.schema.parse(body);

    // if (testCase.expectedStatus === 200) {
    //   const body = await response.json();
    //     //verify isi berdasarkan schema yang sudah dibuat
    //   LoginResponseSchema.parse(body);
    // } else{
    //   const body = await response.json();
    //   //verify isi berdasarkan schema yang sudah dibuat
    //   LoginErrorSchema.parse(body);
    // }
  });
}
