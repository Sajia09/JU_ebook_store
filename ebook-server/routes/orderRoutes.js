/**
 * Module representing the order routes.
 * @module routes/orderRoutes
 */

const express = require('express');
const OrderController = require('../controllers/orderController');

const router = express.Router();

/**
 * Function to set up order routes.
 * @param {Object} db - The database object.
 * @returns {Object} Express router for order routes.
 */
module.exports = function (db) {
  /**
   * Controller for handling order-related operations.
   * @type {OrderController}
   */
  const orderController = new OrderController(db);

  /**
   * Route for retrieving order details by ID.
   * @name GET/api/orders/:id
   * @function
   * @memberof module:routes/orderRoutes
   * @inner
   * @param {string} id - The ID of the order to retrieve.
   * @param {function} orderController.trackOrder - The method to handle tracking order requests.
   */
  router.get('/:id', orderController.trackOrder.bind(orderController));

  return router;
};
