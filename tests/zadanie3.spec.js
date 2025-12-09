// @ts-check
import { test, expect } from '@playwright/test';



test('simple get request for all products', async ({ request }) => {
  const response = await request.get('/api/index.php?endpoint=products');

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain('\"items\":[{\"id\":1,\"name\":\"Miecz Runiczny\",\"price\":199.99,\"currency\":\"PLN\",\"display_price\":\"199.99 zł\"},{\"id\":2,')

});

test('simple get request for single product', async ({ request }) => {
  const response = await request.get('/api/index.php?endpoint=products&id=3');

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain('\"id\":3,\"name\":\"Peleryna Maskująca\",\"price\":349,\"currency\":\"PLN\",\"display_price\":\"349.00 zł')

});


test('simple post request', async ({ request }) => {
  const response = await request.post('/api/index.php?endpoint=products', {
    data: {
      "name": "nowy produkt",
      "price": 66.13,
      "currency": "EUR"
    }
  });

  expect(response.status()).toBe(201);
  expect(await response.text()).toContain('{\"message\":\"created (mock)\",\"product\":{\"name\":\"nowy produkt\",\"price\":66.13,\"currency\":\"EUR\",\"id')

});

