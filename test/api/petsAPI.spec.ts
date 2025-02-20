import { test } from '../common/fixtures';
import { expect } from '@playwright/test';
import { urls } from '../utils/urls';

test.describe('Pet store API tests', () => {
  test('GET - findPetsByStatus', async ({ request }) => {
    const status = 'available';
    const response = await request.get(urls.PET_FIND_BY_STATUS, { params : { status } });

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    const responseJSON = await response.json();

    responseJSON.forEach(pet => {
      expect(pet.status).toBe(status);
    });
  });

  test('POST a pet, then GET by id and validate', async ({ request }) => {
    const pet = {
      id: Math.floor(Math.random() * 900000000000) + 100000000000,
      name: 'Best pet ever',
      status: 'available',
    };

    const petPOST = await request.post(urls.PET, { data: pet } );
    await expect(petPOST.ok()).toBeTruthy();
    await expect(petPOST.status()).toBe(200);

    const responseJSONPOST = await petPOST.json();
    await expect(responseJSONPOST.id).toBe(pet.id);
    await expect(responseJSONPOST).toHaveProperty('name', pet.name);
    await expect(responseJSONPOST).toHaveProperty('status', pet.status);

    const petGET = await request.get(`${urls.PET}/${pet.id}`);
    await expect(petGET.ok()).toBeTruthy();
    await expect(petGET.status()).toBe(200);

    const responseJSONGET = await petGET.json();
    await expect(responseJSONGET.id).toBe(pet.id);
    await expect(responseJSONGET).toHaveProperty('name', pet.name);
    await expect(responseJSONGET).toHaveProperty('status', pet.status);
  });
});
