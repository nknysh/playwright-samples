# Playwright Best Practices Example

This repo contains a few practices good to use when develoing autotests.

There are functional and visua tests implemented with Playwright.

The application undex test is a small JavaScript app.

## Playwright Page Object and Fixtures Example

The page objects are stored in `test/common/pages`. There is a `BasePage` and other page object(s) that extend it.

The page objects are passed to tests as fixtures, like this:
```
  test('Validate header', async ({ toDoPage }) => {
    ...
  });
```
where toDoPage is a custom fixture.

Fixtures are registered in `test/common/fixtures`.

## Playwright Keyword-driven Testing Example

Keyword-driven testing (https://en.wikipedia.org/wiki/Keyword-driven_testing) separates the case to be tested (keyword or action word), and implementation of it in the test.

This increases readability, maintainability and allows division of labor (test cases and their implementation can be created by different people).

In this example you can see that the spec file uses keyword `createItem`
```
await toDoPage.createItem(itemTitle);
```

whereas implementation is found on a deeper level, in the page object or a component (if you use one)
```
  public async createItem(name: string) {
    await this.newItem.fill(name);
    await this.page.keyboard.press('Enter');
  }
```

You might say that in the spec file one can read **what** the autotest does, and the page object / component specifies **how** it does it.

## Playwright Components Example

## Playwright Visual Testing Example
