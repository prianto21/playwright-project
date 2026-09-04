import { test as base, expect } from "@playwright/test";

type MyFixtures = {
  myFixture: string;
};

const test = base.extend<MyFixtures>({
  myFixture: async ({}, use) => {
    console.log("=== FIXTURE SETUP ===");

    const value = "Hello Fixture";

    await use(value);

    console.log("=== FIXTURE CLEANUP ===");
  },
});

test.beforeAll(async () => {
  console.log("=== BEFORE ALL ===");
});

test.beforeEach(async () => {
  console.log("=== BEFORE EACH ===");
});

test.afterEach(async () => {
  console.log("=== AFTER EACH ===");
});

test.afterAll(async () => {
  console.log("=== AFTER ALL ===");
});

test("Test A", async ({ myFixture }) => {
  console.log("=== TEST A ===");
  console.log(myFixture);
});

test("Test B", async ({ myFixture }) => {
  console.log("=== TEST B ===");
  console.log(myFixture);
});

export { expect };