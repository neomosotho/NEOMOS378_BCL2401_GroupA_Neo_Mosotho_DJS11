/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import logo from "./assets/images/logo.png";

const MenuContainer = styled.div`
`;
const SideBar = () => {
    return (
        <MenuContainer className="side-bar">
            <img src={logo} className="logo" alt="logo" />
        </MenuContainer>
    )
};

export default SideBar;