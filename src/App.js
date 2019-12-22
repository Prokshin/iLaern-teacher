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
import Examine from "./pages/examine";

import Cookies from "js-cookie";
import MyCourses from "./component/my-courses/my-courses";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: Cookies.get("id") };
  }
  render() {
    return (
      <Router basename="/teacher">
        <div className="App">
          <Grid>
            <Navigation />
            <Grid.Column width={13}>
              <Segment>
                <Switch>
                  <Route path="/constructor">
                    <ConstructorPage cook_id={this.state.id} />
                  </Route>
                  <Route path="/students">
                    <Students cook_id={this.state.id} />
                  </Route>
                  <Route path="/request">
                    <Request cook_id={this.state.id} />
                  </Route>
                  <Route path="/examine">
                    <Examine cook_id={this.state.id} />
                  </Route>
                  <Route path="/courses">
                    <MyCourses cook_id={this.state.id} />
                  </Route>
                  <Route path="/">
                    <LK cook_id={this.state.id} />
                  </Route>
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
