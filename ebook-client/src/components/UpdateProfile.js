import React, { useState } from 'react';
import UserController from './userController';

/**
 * Represents the user profile update form view.
 * @returns {JSX.Element} The user profile update form component.
 */
function UserProfileUpdateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  /**
   * Handles the form submission to update user profile.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userController = new UserController(); // Initialize UserController
      const updatedUser = await userController.updateUser(userId, name, email, phone, age, address, password);
      console.log('Updated user:', updatedUser);
      // Optionally, you can handle success/failure messages or update UI
    } catch (error) {
      console.error('Failed to update user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default UserProfileUpdateForm;
