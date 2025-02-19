import { test } from '../common/fixtures';
import { expect } from '@playwright/test';

test.describe('Pet store', () => {
  // ToDo: Validate that all returned pets have correct status
  test('GET - findPetsByStatus', async ({ request }) => {
    const status = 'available';
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus', { params : { status } });

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    const responseJSON = await response.json();

    console.log(await response.headers());
    console.log('Found pets:', responseJSON.length);
  });

  // ToDo: POST pet, then GET pet by id nad validate response
  test('GET - pet by id', async ({ request }) => {
    const petId = 11;

    const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    const responseJSON = await response.json();
    console.log(responseJSON);

    await expect(responseJSON.id).toBe(petId);
    await expect(responseJSON).toHaveProperty('name', 'teroSr');
  });
});
