// @ts-check
const { test, expect } = require("@playwright/test");

test("playwright-demo", async ({ page }) => {
    await page.goto("http://todomvc.com/examples/react/");
    await page.getByPlaceholder("What needs to be done?").fill("playwright-demo1");
    await page.getByPlaceholder("What needs to be done?").press("Enter");
    await expect(page.locator(".todo-list")).toContainText(["playwright-demo1"]);
    await expect(page.locator(".todo-count")).toContainText(["1 item left"]);
    await page.getByPlaceholder("What needs to be done?").fill("playwright-demo2");
    await page.getByPlaceholder("What needs to be done?").press("Enter");
    await expect(page.locator(".todo-list")).toContainText(["playwright-demo2"]);
    await expect(page.locator(".todo-count")).toContainText(["2 items left"]);
});
