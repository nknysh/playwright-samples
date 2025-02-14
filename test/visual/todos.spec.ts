import { test } from '../common/fixtures';
import { expect } from '@playwright/test';

test.describe('ToDo List - Visual tests', () => {
  test('Incomplete item', async ({ toDoPage }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.goto();
    await toDoPage.createItem(itemTitle);
    expect(await toDoPage.getToDoList().getListItemContainer(0).screenshot()).toMatchSnapshot(
      `incomplete-item.png`
    );
  });

  test('Complete item', async ({ toDoPage }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.goto();
    await toDoPage.createItem(itemTitle);
    await toDoPage.toggleItemCompleted(0);
    expect(await toDoPage.getToDoList().getListItemContainer(0).screenshot()).toMatchSnapshot(
      `complete-item.png`
    );
  });
});
