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

  
}

export default TrackingOrder;
