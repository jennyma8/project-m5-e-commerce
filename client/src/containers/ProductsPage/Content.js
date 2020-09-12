import React from "react";
import styled from "styled-components";

export const Content = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border: 1px solid green;
  margin: 20px 0;
`;
