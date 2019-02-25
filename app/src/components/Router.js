import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Search from "../pages/Search";
import SavedBooks from "../pages/SavedBooks";
import NoMatch from "../pages/NoMatch";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Search}/>
                <Route exact path="/savedbooks" component={SavedBooks}/>
                <Route component={NoMatch}/>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;