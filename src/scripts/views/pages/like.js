// /* eslint-disable eol-last */
// /* eslint-disable no-trailing-spaces */
// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createrestaurantItemTemplate } from '../templates/template-creator';

// const Like = {
//   async render() {
//     return `
//     <div class="content">
//     <h2 class="content__heading"></h2>
//     <div id="restaurant" class="restaurant-item">
//     </div>
//     </div>
//     `;
//   },

//   async afterRender() {
//     const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantContainer = document.querySelector('#restaurant');
//     console.log(restaurant);
//     restaurant.forEach((restaurant) => {
//       restaurantContainer.innerHTML += createrestaurantItemTemplate(restaurant);
//     });
//   },
// };

// export default Like;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantView from './like-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './like-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './like-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  },
};

export default Like;
