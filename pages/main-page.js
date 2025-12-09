export class MainPage {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.productsGrid = this.page.getByTestId('products-grid');
        this.productCard = this.page.locator('.product-card');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async openProductByName(name) {
        await this.productCard.getByText(name).click();
    }
}

module.exports = { MainPage }