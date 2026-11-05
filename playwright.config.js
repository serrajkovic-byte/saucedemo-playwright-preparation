const { defineConfig } = require('@playwright/test');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const environment = process.env.ENV || 'dev';
const envConfig = require(path.resolve(__dirname, `config/env.${environment}.json`));

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'results/junit.xml' }]
  ],
  outputDir: 'test-results',
  use: {
    baseURL: envConfig.baseURL,
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});