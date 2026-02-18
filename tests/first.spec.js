import{test,expect} from '@playwright/test'

test('verify title',async({page})=>{
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/.*Playwright/);
});

test('click on get strted', async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.getByRole('link',{name:'Get started'}).click();
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();
});