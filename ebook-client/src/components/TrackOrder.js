import React, { useState } from 'react';
import axios from 'axios';

/**
 * Component for tracking orders.
 * @component
 */
function OrderTrackingComponent() {
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');

    /**
     * Handles tracking an order.
     * @async
     */
    const trackOrder = async () => {
        try {
            const response = await axios.get(`/api/trackOrder/${orderId}`);
            setOrderStatus(response.data.order.status);
        } catch (error) {
            console.error('Error tracking order:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
            />
            <button onClick={trackOrder}>Track Order</button>
            {orderStatus && <p>Order Status: {orderStatus}</p>}
        </div>
    );
}

export default OrderTrackingComponent;
