import React from "react";
import { Tab, Button, List } from "semantic-ui-react";

const ListIcon = () => (
  <List>
    <List.Item>
      <List.Icon name="user" />
      <List.Content>Иванов Иван Иванович</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="marker" />
      <List.Content>Уфа, УГАТУ</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="mail" />
      <List.Content>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="linkify" />
      <List.Content>
        <a href="http://vk.com/BestMotherFucker">
          http://vk.com/BestMotherFucker
        </a>
      </List.Content>
    </List.Item>
  </List>
);

const panes = [
  {
    menuItem: "Основное",
    render: () => (
      <Tab.Pane attached={false}>
        <ListIcon />
        <Button basic color="red" content="Выход" />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Безопастность",
    render: () => (
      <Tab.Pane attached={false}>
        ТУТ МОЖНО БУДЕТ СМЕНИТЬ ПАРОООООООООООЛЬ
      </Tab.Pane>
    )
  }
];

const LK = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default LK;
