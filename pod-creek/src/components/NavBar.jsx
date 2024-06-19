/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBar, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBarDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 16px 40px;
align-items: center;
color: ${({ theme }) => theme.text_primary};
gap: 30px;
background: ${({ theme }) => theme.bgLight};
box-shadow: 16px;
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
`;

const ButtonDiv = styled.div`
font-size: 14px;
cursor: pointer;
text-decoration: none;
max-width: 70px;
align-items: center;
color: ${({ theme }) => theme.text_primary};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 6px;
`;

const NavBar = () => {
return (
<NavBarDiv>
<FontAwesomeIcon icon = {faBar}/>
<ButtonDiv>
<FontAwesomeIcon icon = {faUser}/>
  Log In
</ButtonDiv>
  </NavBarDiv>
);
};

export default NavBar;