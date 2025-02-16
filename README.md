# Playwright TypeScript Best Practices Example

This repository contains several best practices for developing automated tests using Playwright.

There are both functional and visual tests implemented with Playwright and TypeScript.

The application under test is a small JavaScript app.

To start the app:

```sh
npm run start
```

To run Playwright fuctional test:

```sh
npm run test
```

## Playwright Page Object and Fixtures Example

The page objects are stored in `test/common/pages`. There is a `BasePage` and other page objects that extend it.

The page objects are passed to tests as fixtures, like this:

```javascript
test('Validate header', async ({ toDoPage }) => {
  ...
});
```

where `toDoPage` is a custom fixture.

Fixtures are registered in `test/common/fixtures`.

## Playwright Keyword-driven Testing Example

[Keyword-driven testing](https://en.wikipedia.org/wiki/Keyword-driven_testing) separates the test case action (keyword or action word) from its implementation.

This approach increases readability, maintainability, and allows division of labor (test cases and their implementation can be created by different people).

In this example, the spec file uses the keyword `createItem`:

```javascript
await toDoPage.createItem(itemTitle);
```

The implementation is found at a deeper level, in the page object or a component (if you use one):

```javascript
public async createItem(name: string) {
  await this.newItem.fill(name);
  await this.page.keyboard.press('Enter');
}
```

In the spec file, you can read **what** the automated test does, while the page object/component specifies **how** it does it.

## Playwright Components Example

In this example, UI components represent controls that can be used across multiple pages, reducing code repetition.

Components are stored in `test/common/components/`. Each component class contains element locators and methods. It is recommended to have atomic methods to enable reusability.

To use a component in a page object, instantiate the respective class:

```javascript
private toDoList = new ToDoListComponent(this.page.getByTestId('todo-list'));
```

## Playwright Visual Testing Example

Visual tests capture screenshots of the app (or specific elements) to validate against in future test runs.

In this example, visual test specs and snapshots are stored in `test/visual/`.

Note that snapshot contents and file names differ depending on the system used to run tests. To make tests pass consistenently, you need to run them in the same docker image.

To run visual tests:

```sh
npm run test-visual
```

To update snapshots:

```sh
npm run test-visual:update
```
