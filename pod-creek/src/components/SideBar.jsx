/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimes, faSearch, faStar, faUpload, faSun, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const MenuContainer = styled.div`
flex: 0.5;
display: flex;
flex-direction: column;
height: 100vh;
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
// @media (max-width: 1100px) {
// position: fixed;
// z-index: 1000;
// width: 100%;
// max-width: 250px;
// left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%" )};
// transition: 0.3s ease-in-out;
// }
`;

const Flex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`;

const Logo = styled.div`
width: 100%;
color: ${({ theme }) => theme.primary};
display: flex;
align-items: center;
justify-content: center;
font-size: 25px;
gap: 6px;
font-weight: bold;
font-size: 20px;
margin: 16px 0px;
`;

const img = styled.img`
  height: 40px;
`;

const Close = styled.div`
display: none;
@media (max-width: 1100px) {
display: block;
}
`;

const Elements = styled.div`
padding: 4px 16px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 12px;
cursor: pointer;
color: ${({ theme }) => theme.text_secondary};
width: 100%;
text-decoration: none;
&:hover {
background-color: ${({ theme }) => theme.text_secondary};
}
`;

const NavText = styled.div`
padding: 12px 0px;
text-decoration: none;

`;

const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary};
margin: 10px 0px;

`;

const menuItems = [
    {
        Link : "/",
        name : "Dashboard",
        icon : faHome,
    },

    {
        Link : "/search",
        name : "Search",
        icon :  faSearch,
    },

    {
        Link : "/favourites",
        name : "Favourites",
        icon : faStar,
    }

];

const buttonItems =  [
   {
        fun : () => console.log("Upload"),
        name : "Upload",
        icon : faUpload,
    },

    {
        fun : () => console.log("Light Mode"),
        name : "Light Mode",
        icon : faSun,
    },

    {
        fun : () => console.log("Sign Out"),
        name : "Sign Out",
        icon : faSignOutAlt,
    }

];




const SideBar = ({setMenuOpen, setDarkMode, darkMode}) => {
    return (
        <MenuContainer className="side-bar">
            <flex>
            <logo>
                <img src = {logo} alt="logo"/>
            </logo>
            
            <Close>
                <FontAwesomeIcon icon = {faTimes}/>
            </Close>

            </flex>

            {menuItems.map((item, index) => (
                <Link to={item.link} key={index} style = {{ textDecoration: "none"}}>
                  <Elements>
                    <FontAwesomeIcon icon={item.icon} />
                    <NavText>{item.name}</NavText>
                  </Elements>
                </Link>
            ))}

            {buttonItems.map((item, index) => (
        <div key={index} onClick={item.fun}>
          <Elements>
            <FontAwesomeIcon icon={item.icon} />
            <NavText>{item.name}</NavText>
          </Elements>
        </div>
      ))}
      <HR/>
    </MenuContainer>
  );
};

export default SideBar;

