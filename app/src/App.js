import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/savedbooks" component={SavedBooks} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App;
