import { Locator } from '@playwright/test';

export abstract class BaseComponent {
  constructor(
    protected root: Locator,
  ) {}
}
