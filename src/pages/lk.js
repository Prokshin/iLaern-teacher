import React, { Component } from "react";
import { Tab, Button, List, Header } from "semantic-ui-react";
import { DataService } from "../services/data-service";

const ListIcon = props => (
  <List>
    <List.Item>
      <List.Icon name="user" />
      <List.Content>{props.name}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="marker" />
      <List.Content>{props.location}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="mail" />
      <List.Content>
        <a href="{props.email}">{props.email}</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="linkify" />
      <List.Content>
        <a href="{props.site}">{props.site}</a>
      </List.Content>
    </List.Item>
  </List>
);

export default class LK extends Component {
  data = new DataService();
  state = {
    name: null,
    location: null,
    email: null,
    site: null
  };
  constructor(props) {
    super(props);
    this.updateInfo();
  }

  updateInfo() {
    this.data.getUserInfo().then(res => {
      this.setState({
        name: res.name,
        location: res.location,
        email: res.email,
        site: res.site
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
        <ListIcon
          name={this.state.name}
          location={this.state.location}
          email={this.state.email}
          site={this.state.site}
        />
      </div>
    );
  }
}
