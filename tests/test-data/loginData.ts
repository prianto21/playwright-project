export const loginData = [
  {
    username: "standard_user",
    password: "secret_sauce",
    expectedResult: "success",
  },
  {
    username: "standard_user",
    password: "wrong_password",
    expectedResult: "invalid_credentials",
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    expectedResult: "locked",
  },
];