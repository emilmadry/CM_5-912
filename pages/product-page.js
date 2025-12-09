import { expect } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.partialUrl = 'products/'
    }

    async checkPageId(id) {
        await expect(this.page).toHaveURL(`${this.partialUrl}${id}.html`)
    }

    async checkItemTitle(name) {
        await expect(this.page.getByRole('heading', { name: name })).toBeVisible();
    }
}

module.exports = { ProductPage }