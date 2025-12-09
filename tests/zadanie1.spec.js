// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { ProductPage } from '../pages/product-page';
import { Cart } from '../pages/cart';


test('full e2e path', async ({ page }) => {
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  const cart = new Cart(page);

  const testElement = {
    name: 'Mysz Gamingowa',
    id: 'p4'
  }

  await mainPage.goto();
  await expect(mainPage.productsGrid).toBeVisible();
  await mainPage.openProductByName(testElement.name);

  await productPage.checkPageId(testElement.id);
  await productPage.checkItemTitle(testElement.name);

  await cart.addProductFromProductPageToCart();
  await cart.openCart();
  await cart.checkForProductInCart(testElement.name);
  await cart.buyItemsInCart();

});
