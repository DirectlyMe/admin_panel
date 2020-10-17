import React from "react";
import styled, { css } from 'styled-components'
import SearchBar from "../components/SearchBar";
import SidePanel from "../components/SidePanel";

const nav = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
`;

// Wraps all components in site to help make things responsive
const Layout = ({ children }) =>
{
    return (
        <nav>
            <SidePanel />
            {children}
        </nav>
    );
}

export default Layout;
