import { test } from '../common/fixtures';

test.describe('ToDo List', () => {
  test('Validate header', async ({ toDoPage }) => {
    const expectedHeaderText = 'todos';

    await toDoPage.goto();
    await toDoPage.validateHeader(expectedHeaderText);
  });
});
