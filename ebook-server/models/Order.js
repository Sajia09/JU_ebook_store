class Order {
    constructor(db) {
      this.collection = db.collection('orders');
    }
  
    async createOrder(orderData) {
      try {
        const result = await this.collection.insertOne(orderData);
        return result.ops[0];
      } catch (error) {
        throw error;
      }
    }
  
    
  }
  
  module.exports = Order;
  