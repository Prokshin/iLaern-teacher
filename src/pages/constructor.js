import React from "react";
import {
  Header,
  Button,
  Form,
  TextArea,
  List,
  Label,
  Tab
} from "semantic-ui-react";

import TopicDropdown from "../component/topic-dropdown/topic-dropdown";
const panes = [
  {
    menuItem: "Создать тему",
    pane: <Tab.Pane key="tab1">Создать тему</Tab.Pane>
  },
  {
    menuItem: "Создать тест",
    pane: (
      <Tab.Pane key="tab2">
        <TopicDropdown />
        <Form>создание</Form>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Создать статью",
    pane: (
      <Tab.Pane key="tab3">
        <TopicDropdown />
        <Form>
          <TextArea placeholder="Текст статьи" />
          <Button>Отправить</Button>
        </Form>
      </Tab.Pane>
    )
  }
];

const ConstructorPage = () => (
  <div>
    <Header as="h1" color={"red"} textAlign="center">
      Конструктор
    </Header>
    <h4 class="ui horizontal divider">
      <i class="angle down red icon"></i>
    </h4>
    <Tab panes={panes} renderActiveOnly={false} />
  </div>
);

export default ConstructorPage;
