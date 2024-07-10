import Therestaurant from '../../data/therestaurant';
import { createrestaurantItemTemplate } from '../templates/template-creator';

const Listrestaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading"></h2>
    <div id="restaurant" class="restaurant-item">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await Therestaurant.listrestaurant();
    const restaurantList = document.querySelector('.restaurant-item');
    restaurant.forEach((restaurant) => {
      restaurantList.innerHTML += createrestaurantItemTemplate(restaurant);
    });
  },
};

export default Listrestaurant;
