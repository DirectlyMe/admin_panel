import React from "react";
import styled from "styled-components";

const Content = styled.article`
    width: calc(100vw - 450px);
    position: absolute; 
    top: 0;
    right: 0; 
    margin: 0;
    padding: 0;
`;

// Layout that houses components in the content section
const ContentLayout = ({ children }) => 
{
    return (
        <Content>
            {children}
        </Content>
    );
}

export default ContentLayout;
