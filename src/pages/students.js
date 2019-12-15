import React from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import GroupDropdown from "../component/group-dropdown/group-dropdown";

const Students = () => (
  <div>
    <Header as="h1" color={"red"} textAlign="center">
      Студенты
    </Header>
    <h4 class="ui horizontal divider">
      <i class="angle down red icon"></i>
    </h4>
    <GroupDropdown />
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          {" "}
          <Table.HeaderCell colSpan="6">Дисциплина</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell rowSpan="2">№</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Студент</Table.HeaderCell>
          <Table.HeaderCell colSpan="4">Выполненые задания</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Лабораторные</Table.HeaderCell>
          <Table.HeaderCell>Тесты</Table.HeaderCell>
          <Table.HeaderCell>Видео</Table.HeaderCell>
          <Table.HeaderCell>Лекции</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Анатольев Анатолий Анатолиевич</Table.Cell>
          <Table.Cell textAlign="right">2 из 6</Table.Cell>
          <Table.Cell textAlign="center">1 из 5</Table.Cell>
          <Table.Cell>7 из 18</Table.Cell>
          <Table.Cell>9 из 15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Григорьев Григорий Григориевич</Table.Cell>
          <Table.Cell textAlign="right">2 из 6</Table.Cell>
          <Table.Cell textAlign="center">1 из 5</Table.Cell>
          <Table.Cell>7 из 18</Table.Cell>
          <Table.Cell>9 из 15</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Students;
