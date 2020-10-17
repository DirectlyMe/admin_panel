import React from "react";

// retain all commands and shared state for commands
const commandContext = {
    commands: [
        {
            title: "Merge Profiles"
        }
    ],
};

export default React.createContext(commandContext);
