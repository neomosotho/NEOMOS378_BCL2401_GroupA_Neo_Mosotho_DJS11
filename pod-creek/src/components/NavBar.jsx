/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

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
@media (max-width: 768px) {
}
`;

const ButtonDiv = styled.div`
font-size: 14px;
cursor: pointer;
text-decoration: none;
max-width: 70px;
align-items: center;
color: ${({ theme }) => theme.text_primary};
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 12px;
padding: 8px 10px;
gap: 8px;
`;

const IcoButton = styled.div`
color: ${({ theme }) => theme.text_secondary} 
cursor: pointer;
font-size: 24px;
`;

const NavBar = ({ setMenuOpen, menuOpen }) => {

return (

<NavBarDiv>
<IcoButton onClick = { () => setMenuOpen(!menuOpen) }>
<FontAwesomeIcon icon = {faBars}/>
</IcoButton>
<ButtonDiv>
<FontAwesomeIcon icon = {faUser}/>
  Log In
</ButtonDiv>
  </NavBarDiv>
);
};

export default NavBar;



