const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');

  // I.seeElement('.query'); --> menyebabkan error

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('like one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unlike one restaurant', async ({ I }) => {
  // Memastikan tidak ada restoran yang ditampilkan
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  // Membuka halaman utama
  I.amOnPage('/');

  // Memastikan elemen restoran ada dan mendapatkan restoran pertama
  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Menyukai restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Membuka halaman restoran yang disukai
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  // Memastikan restoran yang disukai tampil di halaman 'like'
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Membuka restoran yang disukai
  I.click('.restaurant__title a');

  // Membatalkan suka pada restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Memastikan kembali ke halaman 'like' dan tidak ada restoran yang ditampilkan
  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});


Scenario('searching restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const name = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__title a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    // eslint-disable-next-line no-await-in-loop
    name.push(await I.grabTextFrom('.restaurant__title'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#query');

  const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(name.length, visibleLikedRestaurant);

  const searchQuery = name[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar restaurant yang sesuai dengan searchQuery
  const matchingRestaurant = name.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');

  assert.strictEqual(matchingRestaurant.length, visibleSearchedLikedRestaurant);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < matchingRestaurant.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleTitle = await I.grabTextFrom(locate('.restaurant__title').at(i + 1));

    assert.strictEqual(matchingRestaurant[i], visibleTitle);
  }
});
