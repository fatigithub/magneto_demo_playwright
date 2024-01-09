import { test, expect } from "@playwright/test";
let context;
let page;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("/");
});

test("should create account", async ({}) => {
  await expect(
    page.getByRole("link", { name: "Create an Account" })
  ).toHaveAttribute(
    "href",
    "https://magento.softwaretestingboard.com/customer/account/create/"
  );
  await page.getByRole("link", { name: "Create an Account" }).click();
  await expect(page).toHaveURL("/customer/account/create/");
  await page.getByTitle("First Name").fill("demoTesteur");
  await page.getByTitle("Last Name").fill("demoTesteur");
  await page.getByTitle("Email").fill("demoTesteur@gmail.com");
  await page.locator("#password").fill("Azert1@/:*");
  await page.getByTitle("Confirm Password").fill("Azert1@/:*");
  await page.getByRole("button", { name: "Create an Account" }).click();
  await expect(
    page.getByText("Thank you for registering with Main Website Store.")
  ).toHaveText("Thank you for registering with Main Website Store.");
});
