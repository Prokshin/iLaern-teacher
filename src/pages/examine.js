import React, { Component } from "react";
import { Header, Card, Button, Divider, Icon, Table } from "semantic-ui-react";
import CardApprove from "../component/card-approve/card-approve";
import { DataService } from "../services/data-service";
import { Link, Switch, Route } from "react-router-dom";
import CheckTable from "../component/check-table/check-table";

const req = [
  {
    name: "Анатольев Анатолий Анатолиевич",
    group: "ПРО-381",
    id: "1"
  },
  {
    name: "Григорьев Григорий Григориевич",
    group: "ПРО-999",
    id: "2"
  }
];

export default class Examine extends Component {
  data = new DataService();
  state = {
    data: "",
    cook_id: this.props.cook_id
  };
  constructor(props) {
    super(props);
    this.Update();
  }

  Update = () => {
    this.data.getCourses(1).then(n => {
      console.log(n.courses);
      this.el = n.courses.map(r => {
        return (
          <Table.Row>
            <Table.Cell>
              <Link to="/my-courses/OOP/to-check">{r.name}</Link>
            </Table.Cell>
          </Table.Row>
        );
      });

      this.setState({
        data: this.el
      });
    });
  };

  render() {
    console.log(this.el);
    return (
      <div>
        <div>
          <Header as="h1" color={"red"} textAlign="center">
            Проверка заданий
          </Header>
          <h4 class="ui horizontal divider">
            <i class="angle down red icon"></i>
          </h4>
          <Switch>
            <Route path="/my-courses/:id/to-check">
              <CheckTable />
            </Route>
            <Route path="/my-courses">
              <Table celled size="large">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Курс</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body></Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell>{this.state.data}</Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
