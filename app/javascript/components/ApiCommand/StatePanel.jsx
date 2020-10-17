import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import _, { object } from "underscore";
import ReactDiffViewer from "react-diff-viewer";

const Panel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

/**
 * Format json and prep for display
 * @param data -- stores json data
 * @param newData -- optional new data that can be compared to the original
 */
const StatePanel = ({ data, newData = {} }) => {
    return (
        <Panel>
            <>
                <ReactDiffViewer
                    oldValue={JSON.stringify(data, 0, 2)}
                    newValue={JSON.stringify(newData, 0, 2)}
                />
            </>
        </Panel>
    );
};

export default StatePanel;
