import React, { Component } from "react";
import { Header, Icon, Table, Card } from "semantic-ui-react";
import CardApprove from "../component/card-approve/card-approve";

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

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: req
    };
  }

  approve(id) {
    console.log("Подтверждение");
    console.log("Отправка данных на сервер");
    console.log("Удаление");
  }

  render() {
    let el = this.state.data.map(n => {
      return (
        <CardApprove
          approve={this.approve}
          key={n.id}
          name={n.name}
          group={n.group}
          id={n.id}
        ></CardApprove>
      );
    });

    return (
      <div>
        <div>
          <Header as="h1" color={"red"} textAlign="center">
            Заявки
          </Header>
          <h4 class="ui horizontal divider">
            <i class="angle down red icon"></i>
          </h4>
          <Card.Group>{el}</Card.Group>
        </div>
      </div>
    );
  }
}
