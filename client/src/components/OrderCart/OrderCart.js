import React from "react";
import styled from "styled-components";

const OrderCart = (props) => {
  const CART = props.data;
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
              <CellName>{item.name}</CellName>
              <CellQuantity>{item.quantity}</CellQuantity>
              <CellPrice>${item.price}</CellPrice>
            </RowContent>
          );
        })}
      </Table>
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
  /* border: 1px solid red; */
`;
// ############################ TABLE STYLING #######################

const Table = styled.table`
  /* border: 2px solid red; */
  width: 100%;
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
`;

const CellPrice = styled.td`
  text-align: center;
`;

const ColName = styled.th``;

const ColQty = styled.th``;

const ColPrice = styled.th``;

export default OrderCart;
