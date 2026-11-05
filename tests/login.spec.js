import { test, expect } from './fixtures/baseTest';
import testData from './data/testData';

const { users, invalidLoginScenarios } = testData;

test.describe('Sauce Demo Authentication Suite', () => {

    test('LOGIN-01: Login form controls are visible', async ({ loginPage }) => {
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });

    test('LOGIN-02: Standard user can log in successfully', async ({ page, loginPage }) => {
        await loginPage.login(users.standard.username, users.standard.password);
        await expect(page).toHaveURL(/inventory\.html$/);
        await expect(page.locator('.title')).toHaveText('Products');
    });
    
    for (const data of invalidLoginScenarios) {
        test(`${data.id}: ${data.scenario}`, async ({ loginPage }) => {
            await loginPage.login(data.username, data.password);
            await expect(loginPage.errorMessage).toContainText(data.expectedError);
        });
    }
    test('LOGIN-09: Password field input is masked', async ({ loginPage }) => {
        await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    });
});