import React, { Component } from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import GroupDropdown from "../component/group-dropdown/group-dropdown";
import { DataService } from "../services/data-service";
import SelectCourse from "../component/select-course/select-course";

export default class Students extends Component {
  data = new DataService();
  state = {
    full: { onCourse: [{}] },
    subject: [],
    students: [1, 2],
    cook_id: this.props.cook_id
  };
  constructor(props) {
    super(props);
    this.updateStudents(0);
  }
  updateStudents() {
    this.data.getAllStudents().then(res => {
      this.setState({
        full: res,
        subject: res.onCourse[0],
        students: res.onCourse[0].students
      });
    });
  }

  doKeyAndValueArray = () => {
    const a = this.state.full.onCourse.map(n => {
      return n;
    });

    return a;
  };

  onSelectCourse = id => {
    this.setState({
      subject: this.state.full.onCourse[id],
      students: this.state.full.onCourse[id].students
    });
  };
  render() {
    let tableCell = this.state.students.map(n => {
      return (
        <Table.Row>
          <Table.Cell>{n.id}</Table.Cell>
          <Table.Cell>
            {n.name}
            {n}
          </Table.Cell>
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

    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Студенты
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <SelectCourse
          onSelect={this.onSelectCourse}
          subject={this.doKeyAndValueArray()}
        />
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
