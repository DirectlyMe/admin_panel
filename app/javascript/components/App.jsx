import React from "react";
import { hot } from "react-hot-loader";
import Routes from "../routes/Index";


const App = () =>
{
    return (
        <React.Fragment>
            {Routes}
        </React.Fragment>
    )
}

// export default props => <>{Routes}</>;
// export default hot(module)(App);
export default App;