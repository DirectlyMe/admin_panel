import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StatePanel from "./StatePanel";
import CommandContext from "../../contexts/CommandsContext";
import { GATHER, PREVIEW, CONFIRM } from "./constants";

const Title = styled.h2`
    font-size: 38px;
    margin-left: 40px;
    margin-top: 30px;
    font-weight: normal;
`;

const Command = styled.div`
    display: flex;
    flex-direction: column;
`;

const Statuses = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 0;
`;

/**
 * Parent for api commands
 * @param {*} params -- react router props
 */
const ApiCommand = () => {
    // the command context stores all api commands
    const cmdContext = useContext(CommandContext);
    // always start in the Gather stage
    let stage = useState(GATHER);
    let [oldData, setOld] = useState({
        test1: "this is a test",
        test2: [1, 2, 3, 4],
        test3: {
            innertest: "innertesting",
        },
    });

    let [newData, setData] = useState({
        test1: "this is a test",
        test2: [1, 2, 3, 4],
        test3: {
            innertest: "innertesting",
        },
    });

    let { id } = useParams();
    let currentCommand = cmdContext.commands[id];

    function updateParam(e) {
        newData[e.target.name] = e.target.value;
        setData({ ...newData });
    }

    return (
        <Command>
            <Title>{currentCommand.title}</Title>
            <Statuses>status place holder</Statuses>
            <StatePanel data={oldData} newData={newData} />
            <br />
            <div>params:</div>
            <div>
                <input name="test1" onChange={updateParam} />
            </div>
        </Command>
    );
};

export default ApiCommand;
