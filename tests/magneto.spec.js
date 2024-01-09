import { test, expect } from '@playwright/test';
const baseUrl='https://magento.softwaretestingboard.com/'
let context;
let page;
test.beforeAll(async ({browser}) => {
     context = await browser.newContext();
     page = await context.newPage();
     await page.goto(baseUrl);
  });


test('should creat account', async ({}) => {
  await expect(page.getByRole('link',{name:"Create an Account"})).toHaveAttribute('href','https://magento.softwaretestingboard.com/customer/account/create/');
  await page.getByRole('link',{name:"Create an Account"}).click();
 
})