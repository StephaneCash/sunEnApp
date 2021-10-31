import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainContent from "../view/MainContent";

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainContent} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;