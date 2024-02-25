const express = require('express');
const router = express.Router();
const OrderController = require('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/controllers/orderController');

const orderController = new OrderController();

/**
 * Route for tracking orders.
 */
router.get('/trackOrder/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const result = await orderController.trackOrder(orderId);
    res.json(result);
});

module.exports = router;
