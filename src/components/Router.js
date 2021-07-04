import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import New from "./New";

function Routes() {
    return(
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/new">
                <New/>
            </Route>

        </Switch>
    )
}

export default Routes;