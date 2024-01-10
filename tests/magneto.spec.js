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
  await page.getByTitle("Email").fill("demoTesteurooo@gmail.com");
  await page.locator("#password").fill("Azert1@/:*");
  await page.getByTitle("Confirm Password").fill("Azert1@/:*");
  await page.getByRole("button", { name: "Create an Account" }).click();
  await expect(
    page.getByText("Thank you for registering with Main Website Store.")
  ).toHaveText("Thank you for registering with Main Website Store.");
});
test("shoud dadd product", async ({}) => {
  await page
    .locator("a[href='https://magento.softwaretestingboard.com/women.html']")
    .click();
  await expect(page).toHaveURL("/women.html");
  await page.locator('[alt="Radiant Tee"]').click();
  await expect(page).toHaveURL("/radiant-tee.html");
  await expect(page.locator('[data-ui-id="page-title-wrapper"]')).toHaveText(
    "Radiant Tee"
  );
  await page.getByRole("option", { name: "M" }).click();
  await page.locator('[option-label="Purple"]').click();
  await page.getByTitle("Qty").clear();
  await page.getByTitle("Qty").fill("2");
  await page.getByRole("button", { name: "Add to Cart" }).click();
  await expect(page.getByText("You added Radiant Tee to your")).toContainText(
    "You added Radiant Tee to your"
  );
});
