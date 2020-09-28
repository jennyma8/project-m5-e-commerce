import React from "react";
import styled from "styled-components";
import CheckoutButton from "../UI/CheckoutButton";
import { useHistory } from "react-router-dom";

const OrderForm = (props) => {
  const history = useHistory();
  const CART = props.data;
  const [flag, setFlag] = React.useState(false);
  const [formFlag, setFormFlag] = React.useState(false);

  const postData = () => {
    return fetch("/cart/checkout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        postalCode: document.getElementById("postalCode").value,
        country: document.getElementById("country").value,
      }),
    });
  };

  function SubmitOrder(ev) {
    ev.preventDefault();

    if (Object.keys(CART).length === 0) {
      setFlag(true);
      return;
    } else {
      postData()
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.success) {
            history.push(`/checkout/${json.orderID}`);
          } else {
            setFormFlag(true);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <PaymentSection>
      <SectionTitle>Payment</SectionTitle>
      {/* <FormSection onsubmit={SubmitOrder} method="POST"> */}
      <FormSection>
        <FormContent>
          <Info>
            <InfoHeader>Personal Information</InfoHeader>
            <Top>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last Name"
                required
              />
            </Top>
            <Bottom>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </Bottom>
          </Info>
          <Address>
            <InfoHeader>Shipping Address</InfoHeader>
            <Bottom>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Your Address"
                required
              />
            </Bottom>
            <Top>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
              />
              <input
                type="text"
                id="province"
                name="province"
                placeholder="Province"
                required
              />
            </Top>
            <Top>
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
            </Top>
          </Address>
        </FormContent>
        {flag && <Error>Warning You Need to Add Items</Error>}
        {formFlag && <Error>Warning You Need to Fill the Form</Error>}
        <FormSubmit>
          <CheckoutButton onClickHandler={(ev) => SubmitOrder(ev)}>
            Place Order
          </CheckoutButton>
          {/* <CheckoutButton>Place Order</CheckoutButton> */}
        </FormSubmit>
      </FormSection>
    </PaymentSection>
  );
};

const PaymentSection = styled.div`
  background: hsla(0, 0%, 98%, 1);
  flex: 5;
  min-height: 100vh;
  margin-left: 10px;
`;

const SectionTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
`;

const FormSection = styled.form`
  display: flex;
  flex-flow: column;
  /* align-items: center;
  justify-content: center; */
  /* justify-content: space-between; */
  /* border: 3px solid green; */
`;

const FormContent = styled.div`
  flex: 8;
  min-height: 50vh;
  /* border: 2px dashed green; */
`;

const FormSubmit = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* border: 2px dashed green; */
  margin-top: 5vh;
`;

const Info = styled.div`
  padding: 0 12px;
  /* display: flex;
  flex-flow: column nowrap; */
`;

const Error = styled.span`
  margin-top: 20px;
  color: red;
  font-size: 18px;
  color: red;
  text-align: center;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;

  & input {
    margin: 10px 5px;
    width: 220px;
    /* flex: 1; */
    padding: 8px;
  }
  /* flex-flow: column nowrap; */
`;

const Bottom = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: center;

  & input {
    width: 450px;
    /* flex: 1; */
    padding: 8px;
    margin: 0 5px;
  }
`;

const InfoHeader = styled.h1`
  padding: 8px;
  text-align: center;
  font-size: 18px;
`;

const Address = styled.div`
  padding: 0 12px;
`;

export default OrderForm;
