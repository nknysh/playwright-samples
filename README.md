# Playwright Best Practices Example

This repository contains several best practices for developing automated tests using Playwright.

There are both functional and visual tests implemented with Playwright.

The application under test is a small JavaScript app.

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

## Playwright Visual Testing Example
