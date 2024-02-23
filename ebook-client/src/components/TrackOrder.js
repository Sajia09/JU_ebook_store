import React, { useState } from 'react';
import axios from 'axios';

/**
 * React component for tracking order.
 * @returns {JSX.Element} TrackingOrder component.
 */
function TrackingOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackOrder = async () => {
    try {
      const response = await axios.get(`/orders/${orderId}`);
      setOrderInfo(response.data);
      setError(null);
    } catch (error) {
      setError('Order not found');
      setOrderInfo(null);
    }
  };
  return (
    <div>
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleTrackOrder}>Track</button>
      {error && <p>{error}</p>}
      {orderInfo && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {orderInfo._id}</p>
          {/* Display other order details here */}
        </div>
      )}
    </div>
  );
  
}

export default TrackingOrder;
