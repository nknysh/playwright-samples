import { Page, TestInfo } from '@playwright/test';
export abstract class BasePage {
  readonly page: Page;
  readonly testInfo: TestInfo;

  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
  }

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}
