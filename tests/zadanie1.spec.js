// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { ProductPage } from '../pages/product-page';
import { Cart } from '../pages/cart';

const testElements = [
    {
    name: 'Miecz Runiczny',
    id: 'p1'
  },
    {
    name: 'Eliksir Energii',
    id: 'p2'
  },
    {
    name: 'Peleryna Maskująca',
    id: 'p3'
  },
  {
    name: 'Mysz Gamingowa',
    id: 'p4'
  },
    {
    name: 'Klawiatura Mechaniczna',
    id: 'p5'
  },
    {
    name: 'Słuchawki Studyjne',
    id: 'p6'
  },
  {
    name: 'Notes QA',
    id: 'p7'
  },
    {
    name: 'Kubek Debuggera',
    id: 'p8'
  },
]

testElements.forEach(element => {
  test(`full e2e path for ${element.name}`, async ({ page }) => {
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cart = new Cart(page);

    await mainPage.goto();
    await expect(mainPage.productsGrid).toBeVisible();
    await mainPage.openProductByName(element.name);

    await productPage.checkPageId(element.id);
    await productPage.checkItemTitle(element.name);

    await cart.addProductFromProductPageToCart();
    await cart.openCart();
    await cart.checkForProductInCart(element.name);
    await cart.buyItemsInCart();

  });
});



