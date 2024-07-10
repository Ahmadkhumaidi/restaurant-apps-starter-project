/* eslint-disable key-spacing */
import Listrestaurant from '../views/pages/listrestaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Listrestaurant,
  '/detail/:id': Detail,
  '/like':Like,
};
export default routes;
