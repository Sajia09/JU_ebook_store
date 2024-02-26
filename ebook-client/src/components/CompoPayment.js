import React, { useState } from 'react';
import PaymentService from '../services/PaymentService';

/**
 * PaymentForm component handles the form submission for processing payments.
 * It allows users to enter order ID and amount to initiate payment.
 */
const PaymentForm = () => {
    const [formData, setFormData] = useState({
        orderId: '',
        amount: '',
       
    });
  /**
     * Handles changes in form inputs and updates the formData state accordingly.
     * @param {Object} e - Event object representing the input change event.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
     /**
     * Handles form submission for processing payment.
     * Sends payment request to the backend and clears form data after successful payment.
     * @param {Object} e - Event object representing the form submission event.
     */
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
              
            });
        } catch (error) {
            console.error('Error processing payment:', error.message);
            // Handle error
        }
    };
     // JSX for the PaymentForm component
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