const puppeteer = require('puppeteer');
const notifier = require('node-notifier');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto('https://store.steampowered.com/wishlist/profiles/Your Whishlist ID');

  // Wait for elements with class 'discount_pct' to appear
  await page.waitForSelector('.discount_pct');

  // Extract the content inside the 'discount_pct' class
  const discountContent = await page.evaluate(() => {
    const discountElements = document.querySelectorAll('.discount_pct');
    const discountContentArray = [];

    // Loop through all elements with the 'discount_pct' class
    discountElements.forEach(element => {
      discountContentArray.push(element.textContent);
    });

    return discountContentArray;
  });

  // Check if there are any games with discounts
  if (discountContent.length > 0) {
    // Send a notification for each game with a discount
    discountContent.forEach(gameDiscount => {
      notifier.notify({
        title: 'Steam Wishlist Discount Alert',
        message: `A game is on sale on Steam: ${gameDiscount} off!`,
      });
    });
  } else {
    console.log('No games with discounts found.');
  }

  await browser.close();
})();
