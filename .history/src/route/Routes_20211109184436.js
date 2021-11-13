import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainContent from "../view/MainContent";
import Login from "../view/Login";
import Meteo from "../view/Meteo";
import Historique from "../view/Historique";

function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path="/home" exact component={MainContent} />
                    <Route path="/meteo" exact component={Meteo} />
                    <Route path="/historique" exact component={Historique} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;