import React from "react";
import styled from 'styled-components';

const Bar = styled.div`
    position: absolute;
    top: 30px;
    right: 50px;
    border: solid 1px;
    border-radius: 10px;
    height: 50px;
    width: 250px;
    display: flex;
    align-items: center;
`;

const SearchBar = () => 
{
    return (
        <Bar>
            Search
        </Bar>
    );
}

export default SearchBar;
