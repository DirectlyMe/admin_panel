import React from "react";
import styled, { css } from 'styled-components'
import Routes from "../routes/Index";
import ContentPanel from "../layouts/ContentLayout";
import NavLayout from "../layouts/NavLayout";

// global app styles
const AppStyles = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    font-family: 'Roboto', sans-serif;
`;

/**
 * The web-app start point
 */
const App = () =>
{
    return (
        <AppStyles>
            <NavLayout>
                <ContentPanel>
                    {Routes}
                </ContentPanel>
            </NavLayout>
        </AppStyles>
    );
}

export default App;
