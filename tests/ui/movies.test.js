const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://nikkivasilev-movies.onrender.com/movies');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  