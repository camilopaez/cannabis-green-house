import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sign } from "pages/Sign";
import { Dash } from "pages/Dash";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dash} />
          <Route path="/" component={Sign} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
