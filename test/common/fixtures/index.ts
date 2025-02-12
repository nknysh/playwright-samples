import { chromium, test as baseTest } from '@playwright/test';

import { ToDoPage } from '../pages/ToDoPage';

interface Fixtures {
  readonly toDoPage: ToDoPage;
}

export const test = baseTest.extend<Fixtures>({
  toDoPage: async ({ page }, use, testInfo) => {
    await use(new ToDoPage(page, testInfo));
  }
});

export { expect } from '@playwright/test';
