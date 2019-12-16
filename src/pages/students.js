import React, { Component } from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import GroupDropdown from "../component/group-dropdown/group-dropdown";
import { DataService } from "../services/data-service";

export default class Students extends Component {
  data = new DataService();
  state = {
    subject: [],
    students: [1, 2]
  };
  constructor(props) {
    super(props);
    this.updateStudents();
  }
  updateStudents() {
    this.data.getStudents().then(res => {
      this.setState({
        subject: res[0].subjects[0],
        students: res[0].subjects[0].students
      });
    });
  }
  render() {
    let tableCell = this.state.students.map(n => {
      return (
        <Table.Row>
          <Table.Cell>{n.id}</Table.Cell>
          <Table.Cell>{n.name}</Table.Cell>
          <Table.Cell textAlign="right">
            {n.labs} из {this.state.subject.allLabs}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {n.test} из {this.state.subject.allTest}
          </Table.Cell>
          <Table.Cell>
            {n.video} из {this.state.subject.allVideo}
          </Table.Cell>
          <Table.Cell>
            {n.lecture} из {this.state.subject.allLecture}
          </Table.Cell>
        </Table.Row>
      );
    });
    console.log(tableCell);
    // let tableCell = this.students.map(n => {
    //   console.log(n);
    // });
    //(
    //   <Table.Row>
    //     <Table.Cell>1</Table.Cell>
    //     <Table.Cell>Анатольев Анатолий Анатолиевич</Table.Cell>
    //     <Table.Cell textAlign="right">2 из 6</Table.Cell>
    //     <Table.Cell textAlign="center">1 из 5</Table.Cell>
    //     <Table.Cell>7 из 18</Table.Cell>
    //     <Table.Cell>9 из 15</Table.Cell>
    //   </Table.Row>
    // );

    return (
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
              <Table.HeaderCell colSpan="6">
                {this.state.subject.name}
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">№</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Студент</Table.HeaderCell>
              <Table.HeaderCell colSpan="4">
                Выполненые задания
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Лабораторные</Table.HeaderCell>
              <Table.HeaderCell>Тесты</Table.HeaderCell>
              <Table.HeaderCell>Видео</Table.HeaderCell>
              <Table.HeaderCell>Лекции</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {tableCell}
        </Table>
      </div>
    );
  }
}
