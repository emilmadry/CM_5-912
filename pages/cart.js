import { expect } from '@playwright/test';

export class Cart {
    constructor(page) {
        this.page = page;
        this.addToCartButton = this.page.getByRole('button', { name: 'Dodaj do koszyka' });
        this.successToast = this.page.locator('.toast-success');
        this.openCartButton = this.page.getByTestId('cart-button');
        this.cartPanel = this.page.getByTestId('cart-panel');
        this.listOfProductsInCart = this.page.getByTestId('cart-list');
        this.buyButton = this.page.getByTestId('cart-buy');
    }

    async addProductFromProductPageToCart() {
        await this.addToCartButton.click();
        await expect(this.successToast).toBeVisible();
    }

    async openCart() {
        await this.openCartButton.click();
        await expect(this.cartPanel).toBeVisible();
    }

    async checkForProductInCart(name) {
        await expect(this.listOfProductsInCart).toContainText(name);
    }

    async buyItemsInCart() {
        await this.buyButton.click();
        await expect(this.successToast.getByText('sukces')).toBeVisible();
        await expect(this.cartPanel).not.toBeVisible();
    }
}

module.exports = { Cart }