/* eslint-disable quotes */
import CONFIG from "../../globals/config";

const createrestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img class="lazyload" id="restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL_P + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.title}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>name</h4>
    <p>${restaurant.restaurant.name}</p>
    <h4>City</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.restaurant.address} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>description</h3>
    <p>${restaurant.restaurant.description}</p>
  </div>
  
`;

const createmenurestaurant = (menu) => `
<div class="restaurant__menusmakanan">
    <p>${menu.name}</p>
  </div>
`;

const createreviewrestauranttemplate = (review) => `
  <div class="restaurant__reviewrestaurant">
    <p>${review.name}</p>
  </div>
  <div class="restaurant__reviewrestaurant">
    <p>${review.date}</p>
  </div>
  <div class="restaurant__reviewrestaurant">
    <p>${review.review}</p>
  </div>
`;

const createrestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload" id="restaurant-item__header__poster" alt="${restaurant.name || '-'}"
           data-src="${CONFIG.BASE_IMAGE_URL_P + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p class="restaurant-itemdescription">${restaurant.description || '-'}</p>
      <p>📍<span class="restaurant-itemlocation">${restaurant.city || '-'}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createrestaurantItemTemplate,
  createrestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createmenurestaurant,
  createreviewrestauranttemplate,
};
