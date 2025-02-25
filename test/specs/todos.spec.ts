import { test } from '../common/fixtures';

test.beforeEach(async ({ toDoPage }) => {
  await toDoPage.goto();
});

test.describe('ToDo List', () => {
  test('Validate header', async ({ toDoPage }) => {
    const expectedHeaderText = 'todos';

    await toDoPage.validateHeader(expectedHeaderText);
  });

  test('Create item', async ({ toDoPage }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.createItem(itemTitle);
    await toDoPage.validateItemLabel(0, itemTitle);
    await toDoPage.validateItemNotCompleted(0);
  });

  test('Create two items sequentially', async ({ toDoPage }) => {
    const itemTitles = ['newItemTitle1', 'newItemTitle2'];

    await toDoPage.createItem(itemTitles[0]);
    await toDoPage.createItem(itemTitles[1]);
    await toDoPage.validateItemLabel(0, itemTitles[0]);
    await toDoPage.validateItemLabel(1, itemTitles[1]);
    await toDoPage.validateItemNotCompleted(0);
    await toDoPage.validateItemNotCompleted(1);
  });

  test('Complete item', async ({ toDoPage }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.createItem(itemTitle);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.validateItemCompleted(0);
  });

  test('Unnomplete item', async ({ toDoPage }) => {
    const itemTitle = 'newItemTitle';

    await toDoPage.createItem(itemTitle);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.toggleItemCompleted(0);
    await toDoPage.validateItemNotCompleted(0);
  });
});
