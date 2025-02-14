import { expect } from '@playwright/test';
import { BaseComponent } from './baseComponent';

export class ToDoListComponent extends BaseComponent {
  private container = this.root;
  private listItemContainer = (n: number) => this.container.getByTestId('container').nth(n);
  private listItem = (n: number) => ({
    checkbox: this.listItemContainer(n).getByTestId('checkbox'),
    label: this.listItemContainer(n).getByTestId('label'),
    deleteButton: this.listItemContainer(n).getByTestId('delete'),
  });

  public getListItemContainer(index: number) {
    return this.listItemContainer(index);
  }

  public async validateItemLabel(index: number, value: string) {
    await expect(this.listItem(index).label).toHaveText(value);
  }

  public async toggleItemCompleted(index: number) {
    await this.listItem(index).checkbox.click();
  }

  public async validateItemCompleted(index: number) {
    await expect(this.listItemContainer(index)).toHaveClass('completed');
  }

  public async validateItemNotCompleted(index: number) {
    await expect(this.listItemContainer(index)).not.toHaveClass('completed');
  }
}
