import { test } from '../common/fixtures';

test.describe('ToDo List', () => {
  test('Validate header', async ({ toDoPage }) => {
    const expectedHeaderText = 'todos';

    await toDoPage.goto();
    await toDoPage.validateHeader(expectedHeaderText);
  });

  test('Create item', async ({ toDoPage, page }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.goto();
    await toDoPage.createItem(itemTitle);
    await toDoPage.validateItemLabel(0, itemTitle);
    await toDoPage.validateItemNotCompleted(0);
  });

  test('Create two items sequentially', async ({ toDoPage }) => {
    const itemTitles = ['newItemTitle1', 'newItemTitle2'];

    await toDoPage.goto();
    await toDoPage.createItem(itemTitles[0]);
    await toDoPage.createItem(itemTitles[1]);
    await toDoPage.validateItemLabel(0, itemTitles[0]);
    await toDoPage.validateItemLabel(1, itemTitles[1]);
    await toDoPage.validateItemNotCompleted(0);
    await toDoPage.validateItemNotCompleted(1);
  });

  test('Complete item', async ({ toDoPage, page }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.goto();
    await toDoPage.createItem(itemTitle);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.validateItemCompleted(0);
  });

  test.only('Unnomplete item', async ({ toDoPage, page }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.goto();
    await toDoPage.createItem(itemTitle);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.validateItemNotCompleted(0);
  });
});
