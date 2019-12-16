import React from "react";
import {
  Header,
  Button,
  Container,
  Icon,
  Image,
  Modal
} from "semantic-ui-react";

const ConstructorPage = () => (
  <div>
    <Header as="h1" color={"red"} textAlign="center">
      Конструктор тестов
    </Header>
    <h4 class="ui horizontal divider">
      <i class="angle down red icon"></i>
    </h4>
    <Container textAlign="center">
      <Button.Group widths="4" color="teal">
        <Button content="Создать статью" />
        <Button content="Создать тест" />
        <Button content="Заменить статью" />
        <Button content="Заменить тест" />
      </Button.Group>
    </Container>
  </div>
);

export default ConstructorPage;
