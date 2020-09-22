import React from "react";

const OrderForm = () => {
  return (
    <form>
      <div>
        <h1>Personal Information</h1>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <div>
        <h1>Shipping Address</h1>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your Address"
          required
        />
        <input type="text" id="city" name="city" placeholder="City" required />
        <input
          type="text"
          id="province"
          name="province"
          placeholder="Province"
          required
        />
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          placeholder="Postal Code"
          required
        />
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Country"
          required
        />
      </div>
    </form>
  );
};

export default OrderForm;
