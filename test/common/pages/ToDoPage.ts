import { env } from '../../utils/env';
import { BasePage } from './BasePage';
import { expect} from '@playwright/test';

export class ToDoPage extends BasePage {
  private header = this.page.getByTestId('header');
  private newItem = this.page.getByTestId('new-item');
  private listItemContainer = (n: number) => this.page.getByTestId('container').nth(n);
  private listItem = (n: number) => ({
    checkbox: this.listItemContainer(n).getByTestId('checkbox'),
    label: this.listItemContainer(n).getByTestId('label'),
    deleteButton: this.listItemContainer(n).getByTestId('delete'),
  });


  public async validateHeader(value: string) {
    expect(await this.header).toHaveText(value);
  }

  public async createItem(name: string) {
    await this.newItem.fill(name);
    await this.page.keyboard.press('Enter');
  }

  public async validateItemLabel(index: number, value: string) {
    expect(await this.listItem(index).label).toHaveText(value);
  }

  public async goto() {
    await super.goto(env.baseUrl);
  }
}
