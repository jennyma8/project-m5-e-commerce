import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  receiveCartItems,
  deleteCartItem,
  updateCartItem,
} from "../../actions";

const OrderCart = (props) => {
  const dispatch = useDispatch();
  const CART = props.data;
  const PRICE = parseFloat(props.price).toFixed(2);
  const QST = parseFloat(props.price * 0.09975).toFixed(2);
  const GST = parseFloat(props.price * 0.05).toFixed(2);
  const TOTALPRICE = parseFloat(props.price * (1 + 0.05 + 0.09975)).toFixed(2);

  function deleteItem(id) {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    fetch(`/cart/${id}`, options)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        dispatch(deleteCartItem());
        dispatch(receiveCartItems(json));
      });
  }

  function modifyCartItem(id, q) {
    const newQuantity = parseInt(q);
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        quantity: newQuantity,
      }),
    };

    fetch("/cart", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(updateCartItem());
        dispatch(receiveCartItems(json));
      });
  }

  return (
    <CartSection>
      <SectionTitle>Order Summary</SectionTitle>

      <Table>
        <RowHeader>
          <ColName>Item Name</ColName>
          <ColQty>Quantity</ColQty>
          <ColPrice>Price</ColPrice>
        </RowHeader>

        {CART.map((item) => {
          return (
            <RowContent>
              <CellName>
                {item.name} -{" "}
                {item.maxQty && <Warning>Max Quantity Reached!</Warning>}
              </CellName>
              <CellQuantity>
                <input
                  type="text"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(ev) => {
                    console.log(ev.target.value);
                    if (ev.target.value == 0) {
                      deleteItem(item.id);
                    } else {
                      modifyCartItem(item.id, ev.target.value);
                    }
                  }}
                />
              </CellQuantity>
              <CellPrice>${item.price}</CellPrice>
            </RowContent>
          );
        })}
      </Table>
      <SaleSummary>
        <Sub>
          Subtotal: <span>${PRICE}</span>
        </Sub>
        <Sub>
          QST: <span>${QST}</span>
        </Sub>
        <Sub>
          GST: <span>${GST}</span>
        </Sub>
        <TotalPrice>
          Total: <span>${TOTALPRICE}</span>
        </TotalPrice>
      </SaleSummary>
    </CartSection>
  );
};

const SectionTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
`;

const CartSection = styled.div`
  flex: 5;
  min-height: 50vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const SaleSummary = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 12px;
`;

const TotalPrice = styled.h1`
  font-size: 28px;
  margin-top: 5vh;
  padding: 3vh 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;
`;

const Sub = styled.h1`
  margin: 3px 0;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
`;
// ############################ TABLE STYLING #######################

const Table = styled.table`
  flex: 7;
  /* border: 2px solid red; */
  width: 100%;
  border-bottom: 1px solid gainsboro;
  margin-bottom: 5vh;
`;

const Warning = styled.span`
  font-style: italic;
  color: red;
`;

const RowHeader = styled.tr`
  padding: 5px;

  & th {
    padding: 8px;
  }
`;

const RowContent = styled.tr`
  /* border: 1px solid goldenrod; */
  /* min-height: 80px; */
  & td {
    padding: 12px;
    vertical-align: middle;
  }
`;

const CellName = styled.td`
  text-align: left;
`;

const CellQuantity = styled.td`
  text-align: center;
  color: green;

  & input {
    text-align: center;
    width: 25%;
  }
`;

const CellPrice = styled.td`
  text-align: center;
`;

const ColName = styled.th``;

const ColQty = styled.th``;

const ColPrice = styled.th``;

export default OrderCart;
