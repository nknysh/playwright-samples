import { env } from '../../utils/env';
import { BasePage } from './BasePage';
import { expect} from '@playwright/test';

export class ToDoPage extends BasePage {
  private header = this.page.locator('h1');

  public async validateHeader(value) {
    expect(await this.header).toHaveText(value);
  }

  public async goto() {
    await super.goto(env.baseUrl);
  }
}
