import React from "react";
import styled from 'styled-components';

const Panel = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 450px;
    position: absolute;
    top: 0;
    left: 0;
    border-right: solid 1px;
    z-index: 10;
`;

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-bottom: solid 1px;
`;

const CommandList = styled.div`
    padding-top: 40px;
    padding-left: 30px;
`;

const SidePanel = () =>
{
    return (
        <Panel>
            <Nav>
                Nav Place holder
            </Nav>
            <CommandList>
                test
            </CommandList>
        </Panel>
    );
}

export default SidePanel;
