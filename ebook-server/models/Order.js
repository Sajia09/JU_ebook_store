/**
 * Represents an Order model for managing orders in the database.
 */
class Order {
  /**
   * Creates an instance of the Order model.
   * @param {Object} db - The database connection object.
   */
  constructor(db) {
    /**
     * The collection object representing the 'orders' collection in the database.
     * @type {Object}
     */
    this.collection = db.collection('orders');
  }

  /**
   * Creates a new order in the database.
   * @param {Object} orderData - The data representing the order to be created.
   * @returns {Promise<Object>} A promise that resolves to the created order.
   * @throws {Error} If an error occurs while creating the order.
   */
  async createOrder(orderData) {
    try {
      const result = await this.collection.insertOne(orderData);
      return result.ops[0];
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves an order from the database based on the provided order ID.
   * @param {string} orderId - The ID of the order to retrieve.
   * @returns {Promise<Object|null>} A promise that resolves to the retrieved order, or null if not found.
   * @throws {Error} If an error occurs while retrieving the order.
   */
  async getOrderById(orderId) {
    try {
      const order = await this.collection.findOne({ _id: orderId });
      return order;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Order;
