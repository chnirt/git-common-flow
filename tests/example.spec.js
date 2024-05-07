const { test, expect } = require("@playwright/test");

// Test for FilterAndPagination Component
test("FilterAndPagination Component", async ({ page }) => {
  const url = process.env.URL;
  console.log(`Environment: ${url}`);
  // Navigate to the localhost
  await page.goto(url);

  await page.waitForTimeout(1000);

  // Wait for the list items to be present
  await page.waitForSelector("ul");
  const posts = await page.$$("ul");
  expect(posts.length).toBeGreaterThan(0);

  // Wait for the "Next Page" button to be present
  await page.waitForSelector('button:has-text("Next Page")');
  const nextButton = await page.$('button:has-text("Next Page")');
  expect(nextButton).not.toBeNull();

  // If the "Next Page" button is present, click on it
  if (nextButton) {
    await nextButton.click();
    // Wait for the list items on the next page to be present
    await page.waitForSelector("li");
    const postsOnNextPage = await page.$$("li");
    expect(postsOnNextPage.length).toBeGreaterThan(0);
  }

  // Wait for the "Previous Page" button to be present
  await page.waitForSelector('button:has-text("Previous Page")');
  const prevButton = await page.$('button:has-text("Previous Page")');
  expect(prevButton).not.toBeNull();

  // If the "Previous Page" button is present, click on it
  if (prevButton) {
    await prevButton.click();
    // Wait for the list items on the previous page to be present
    await page.waitForSelector("li");
    const postsOnPrevPage = await page.$$("li");
    expect(postsOnPrevPage.length).toBeGreaterThan(0);
  }
});
