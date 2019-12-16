import React, { Component } from "react";
import { Grid, Menu, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
  state = { activeItem: "Личный кабинет" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid.Column width={3}>
        <Header as="h1" icon color="red" textAlign="center">
          <Icon name="student" />
          I-learn
        </Header>
        <Menu pointing secondary vertical fluid>
          <Link to="/">
            <Menu.Item
              name="Личный кабинет"
              active={activeItem === "Личный кабинет"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
          <Link to="/constructor">
            <Menu.Item
              name="Конструктор заданий"
              active={activeItem === "Конструктор заданий"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
          <Link to="/students">
            <Menu.Item
              name="Мои студенты"
              active={activeItem === "Мои студенты"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
          <Link to="/request">
            <Menu.Item
              name="Заявки студентов"
              active={activeItem === "Заявки студентов"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
        </Menu>
      </Grid.Column>
    );
  }
}
