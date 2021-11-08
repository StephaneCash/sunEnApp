import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainContent from "../view/MainContent";
import Login from "../view/Login";

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path="/home" exact component={MainContent} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;