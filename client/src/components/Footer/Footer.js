import React from "react";
import styled from "styled-components";

import { Logo, Thinh } from "../../assets";

const Footer = () => {
  return (
    <div>
      <div>
        <a href="#">Footer</a>
        <a href="#">Product</a>
        <a href="#">Careers</a>
        <a href="#">About Us</a>
      </div>
      <div>
        <Image src={Logo} alt="Logo" />
        <span>@ 2020 Wearabology All Rights Reserves</span>
      </div>
    </div>
  );
};

const Image = styled.img`
  width: 15px;
`;

export default Footer;
