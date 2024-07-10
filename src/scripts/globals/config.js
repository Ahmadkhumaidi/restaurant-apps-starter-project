/* eslint-disable quotes */
const CONFIG = {
  BASE_URL: "https://restaurant-api.dicoding.dev/",
  BASE_IMAGE_URL_O: "https://restaurant-api.dicoding.dev/images/large/",
  BASE_IMAGE_URL_P: "https://restaurant-api.dicoding.dev/images/medium/",
  BASE_IMAGE_URL_Q: 'https://restaurant-api.dicoding.dev/images/small/',
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: new Date().toISOString(),
};

export default CONFIG;
