import React, { useState } from 'react';
import PaymentService from '../services/PaymentService';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        orderId: '',
        amount: '',
        // Add other necessary fields
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send payment request to the backend
            const response = await PaymentService.processPayment(formData);
            console.log(response); // Handle response as needed
            // Clear form data after successful payment
            setFormData({
                orderId: '',
                amount: '',
                // Clear other fields as needed
            });
        } catch (error) {
            console.error('Error processing payment:', error.message);
            // Handle error
        }
    };
    return (
        <div>
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="orderId">Order ID:</label>
                    <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        value={formData.orderId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                {/* Add other fields as needed */}
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentForm;