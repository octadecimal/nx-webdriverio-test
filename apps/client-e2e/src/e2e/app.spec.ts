import { add } from '@wdiotest/core';
import { subtract } from '@wdiotest/tools';

describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    const sum = add(3, 5);
    const diff = subtract(5, 3);

    expect(sum).toBe(8);
    expect(diff).toBe(2);

    await browser.url('https://webdriver.io');
    await expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
    );
  });
});
