import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Ex from "../ex/ex";
import { DataService } from "../../services/data-service";

export class checkTable extends Component {
  data = new DataService();
  state = {
    data: []
  };
  el = "";
  constructor(props) {
    super(props);
    this.Update();
  }

  Update = () => {
    this.data.getExToCheck(1, this.props.match.url).then(res => {
      if (res.activities === undefined || res.activities === undefined) return;
      this.el = res.activities.map(n => {
        return (
          <Table.Row key={n.id}>
            <Table.Cell>{n.id}</Table.Cell>
            <Table.Cell>
              <Link to={`${this.props.match.url}/${n.id}`}>
                {n.exercise.name}
              </Link>
            </Table.Cell>
            <Table.Cell>
              {n.student.firstName + " " + n.student.lastName}
            </Table.Cell>
          </Table.Row>
        );
      });
      this.setState({ data: this.el });
    });
  };
  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <Switch>
          <Route path="/my-courses/:id/to-check/:id">
            <Ex cook_id={this.props.cook_id} />
          </Route>
          <Route path="/my-courses/:id/to-check">
            <Table celled size="large">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>id</Table.HeaderCell>
                  <Table.HeaderCell>Задача</Table.HeaderCell>
                  <Table.HeaderCell>Студент</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.state.data}</Table.Body>
              <Table.Footer></Table.Footer>
            </Table>
          </Route>
        </Switch>
      </div>
    );
  }
}

const checkTableWithRouter = withRouter(checkTable);
export default checkTableWithRouter;
