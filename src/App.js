import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import { Grid, Menu, Segment } from "semantic-ui-react";
import Content from "./component/content/content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ConstructorPage from "./pages/constructor";
import Students from "./pages/students";
import CardApprove from "./component/card-approve/card-approve";
import Request from "./pages/request";
import LK from "./pages/lk";

function App() {
  return (
    <Router>
      <div className="App">
        <Grid>
          <Navigation />
          <Grid.Column width={13}>
            <Segment>
              <Switch>
                <Route path="/constructor">
                  <ConstructorPage />
                </Route>
                <Route path="/students">
                  <Students />
                </Route>
                <Route path="/request">
                  <Request />
                </Route>
                <Route path="/">
                  <LK />
                </Route>
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
