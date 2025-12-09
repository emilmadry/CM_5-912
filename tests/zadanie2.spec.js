// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { Login } from '../pages/login';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
});


test('admin login', async ({ page }) => {
  const login = new Login(page);

  await login.loginUserWithCredentials(process.env.ADMIN_LOGIN, process.env.ADMIN_PASSWORD);

});

test('user login', async ({ page }) => {
  const login = new Login(page);

  await login.loginUserWithCredentials(process.env.USER_LOGIN, process.env.USER_PASSWORD);
});

