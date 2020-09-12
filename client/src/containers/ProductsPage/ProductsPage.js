import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

const ProductsPage = () => {
  return (
    <PageContainer>
      <Header />
      <Sidebar>
        <Content>Content</Content>
      </Sidebar>
    </PageContainer>
  );
};

export default ProductsPage;
