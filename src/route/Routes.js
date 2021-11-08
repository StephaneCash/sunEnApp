import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainContent from "../view/MainContent";
import Login from "../view/Login";
import Meteo from "../view/Meteo";

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path="/home" exact component={MainContent} />
                    <Route path="/meteo" exact component={Meteo} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;