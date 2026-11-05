class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    async open() { await this.page.goto('/'); }
    async login(username, password) {
        if (username !== undefined) await this.usernameInput.fill(username);
        if (password !== undefined) await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
export { LoginPage };