import 'dotenv/config';

import { devices, PlaywrightTestConfig } from '@playwright/test';
import { env } from './test/utils/env';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  // Don't use this property to don't brake JUnit reporter screenshots (path to attachment is broken)
  // testDir: './specs',

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20 * 1000,
  },

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Configure projects for major browsers */
  projects: [
    // Browsers
    {
      name: 'chromium',
      testDir: './test/specs',
      testMatch: /.*\.spec\.ts/,
      /* Project-specific settings. */
      // use: {
      //   ...devices['Desktop Chrome'],
      //   storageState: 'playwright/.auth/user.json',
      // },
      // dependencies: ['setup'],
    },

    // Browsers
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 16'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Atlas',
    //   use: {
    //     channel: 'msatlas',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: env.baseUrl,

    screenshot: 'only-on-failure',

    testIdAttribute: 'data-testid',

    ignoreHTTPSErrors: true,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',

    video: 'retain-on-failure',
  },

  retries: 0,

  workers: 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [['list'], ['html', { open: 'never' }], ['junit', { outputFile: './junit-results/junit.xml' }]],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
