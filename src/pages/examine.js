import React, { Component } from "react";
import { Header, Card, Button, Divider, Icon } from "semantic-ui-react";
import CardApprove from "../component/card-approve/card-approve";
import { DataService } from "../services/data-service";

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
  el = "";
  constructor(props) {
    super(props);
    this.state = {
      data: req,
      cook_id: this.props.cook_id
    };
    this.Update();
  }

  Update = () => {
    this.data.getExamineTask().then(res => {
      this.el = res.map(n => {
        return (
          <Card key={n.id}>
            <Card.Content>
              <Card.Header>{n.name}</Card.Header>
              <Card.Meta>
                <Divider></Divider>
                <Button basic color="green">
                  <Icon name="file" />
                  скачать файл
                </Button>
              </Card.Meta>
              <Card.Description>{n.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Принять
                </Button>
                <Button basic color="red">
                  Отклонить
                </Button>
              </div>
            </Card.Content>
          </Card>
        );
      });
      this.setState({
        data: this.el
      });
    });
  };

  approve(id) {
    console.log("Подтверждение");
    console.log("Отправка данных на сервер");
    console.log("Удаление");
  }

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
          <Card.Group>{this.el}</Card.Group>
        </div>
      </div>
    );
  }
}
