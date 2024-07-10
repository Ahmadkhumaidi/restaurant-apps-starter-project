/* eslint-disable quotes */
import API_ENDPOINT from "../globals/api-endpoint";

class Therestaurant {
  static async listrestaurant() {
    const response = await fetch(API_ENDPOINT.list_restaurant);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailrestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default Therestaurant;
