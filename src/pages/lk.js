import React, { Component } from "react";
import { Tab, Message, Icon, Header } from "semantic-ui-react";
import { DataService } from "../services/data-service";

const ListIcon = props => {
  function createMarkup() {
    return { __html: props.memo };
  }
  return (
    <div>
      <Header as="h2" color="teal">
        {props.name}
      </Header>
      <Message>
        <Message.Header>Информация о себе</Message.Header>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </Message>
    </div>
  );
};

export default class LK extends Component {
  data = new DataService();
  state = {
    name: null,
    location: null,
    email: null,
    site: null,
    cook_id: this.props.cook_id
  };
  constructor(props) {
    super(props);
    this.updateInfo();
  }

  updateInfo() {
    this.data.getTeacher(2).then(res => {
      this.setState({
        name: `${res.firstName} ${res.lastName}`,
        memo: res.memo
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Личный кабинет
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <ListIcon name={this.state.name} memo={this.state.memo} />
        <h2 class="ui horizontal divider teal">
          <Header as="h3" color="teal" textAlign="center">
            <Icon name=" settings" /> Настройки
          </Header>
        </h2>
        <p>
          Сайт работает в тестовом режиме, часть функционала будет реализована в
          ближайшее время
        </p>
      </div>
    );
  }
}
