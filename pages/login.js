import { expect } from '@playwright/test';

export class Login {
    constructor(page) {
        this.page = page;
        this.usernameField = this.page.getByTestId('login-username');
        this.passwordField = this.page.getByTestId('login-password');
        this.loginButton = this.page.getByTestId('login-button');
        this.welcomeMessage = this.page.getByTestId('welcome-msg');
    }

    async loginUserWithCredentials(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await expect(this.welcomeMessage).toHaveText(`Witaj: ${username}`);
    }
}

module.exports = { Login }