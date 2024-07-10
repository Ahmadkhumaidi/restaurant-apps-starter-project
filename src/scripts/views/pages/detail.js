/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import Therestaurant from "../../data/therestaurant";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import { createrestaurantDetailTemplate, createmenurestaurant, createreviewrestauranttemplate } from "../templates/template-creator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="restaurant-menu" class="restaurant-menu"></div>
    <div id="restaurant-review" class="restaurant-review"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const hero = document.querySelector(".hero");
    hero.style.display = "none";
    const h2 = document.querySelector("h2");
    h2.style.display = "none";
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Therestaurant.detailrestaurant(url.id);
    console.log(restaurant.restaurant.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);
    const Menu = restaurant.restaurant.menus;
    console.log(Menu);
    const menuContainer = document.querySelector("#restaurant-menu");
    if (Menu) {
      const { foods } = Menu;
      const { drinks } = Menu;
      if (foods && foods.length > 0) {
        const h4 = document.createElement("h4");
        const text = "Menu Makanan";
        h4.innerText = text;
        menuContainer.appendChild(h4);
        foods.forEach((menu) => {
          menuContainer.innerHTML += createmenurestaurant(menu);
        });
      } else {
        console.log("data menu food tidak ditemukan");
      }
      if (drinks && drinks.length > 0) {
        const h4 = document.createElement("h4");
        const text = "Menu Minuman";
        h4.innerText = text;
        menuContainer.appendChild(h4);
        drinks.forEach((menu) => {
          menuContainer.innerHTML += createmenurestaurant(menu);
        });
      } else {
        console.log("data menu drink tidak ditemukan");
      }
    } else {
      console.log("data menu tidak ditemukan");
    }

    const review = restaurant.restaurant.customerReviews;
    console.log(review);
    const reviewtContainer = document.querySelector("#restaurant-review");
    if (review && review.length > 0) {
      const h4 = document.createElement("h4");
      const text = "review Makanan";
      h4.innerText = text;
      reviewtContainer.appendChild(h4);
      review.forEach((review) => {
        reviewtContainer.innerHTML += createreviewrestauranttemplate(review);
      });
    } 

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      FavoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
      },
    });
    console.log(restaurant);
  },
};

export default Detail;
