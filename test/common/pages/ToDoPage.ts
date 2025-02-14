import { ToDoListComponent } from '../../components/toDoListComponent';
import { env } from '../../utils/env';
import { BasePage } from './BasePage';
import { expect} from '@playwright/test';

export class ToDoPage extends BasePage {
  private header = this.page.getByTestId('header');
  private newItem = this.page.getByTestId('new-item');

  private toDoList = new ToDoListComponent(this.page.getByTestId('todo-list'));

  public getToDoList() {
    return this.toDoList;
  }

  public async validateHeader(value: string) {
    await expect(this.header).toHaveText(value);
  }

  public async createItem(name: string) {
    await this.newItem.fill(name);
    await this.page.keyboard.press('Enter');
  }

  public async validateItemLabel(index: number, value: string) {
    await this.toDoList.validateItemLabel(index, value);
  }

  public async toggleItemCompleted(index: number) {
    await this.toDoList.toggleItemCompleted(index);
  }

  public async validateItemCompleted(index: number) {
    await this.toDoList.validateItemCompleted(index);
  }

  public async validateItemNotCompleted(index: number) {
    await this.toDoList.validateItemNotCompleted(index);
  }

  public async goto() {
    await super.goto(env.baseUrl);
  }
}
