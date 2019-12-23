import React, { Component } from "react";
import { Header, Form, Tab, Divider } from "semantic-ui-react";

import { DataService } from "../services/data-service";
import CreateCourse from "../component/forms/createCourse";
import CreateTopic from "../component/forms/createTopic";
import CreateTest from "../component/create-test/create-test";
import CreateLecture from "../component/forms/create-lecture";
export default class ConstructorPage extends Component {
  data = new DataService();
  panes = [];
  state = {
    cook_id: this.props.cook_id,
    subjects: [],
    createCourse: { name: "gg" },
    login: "",
    password: ""
  };
  constructor(props) {
    super(props);
    this.updateSubjects();
  }

  updateSubjects() {
    this.data
      .getCourses()
      .then(res => {
        this.updatePanes(res.courses);
      })
      .then(res => {
        this.setState({
          subjects: res
        });
      });
  }

  updatePanes(subjects) {
    console.log(subjects);
    this.panes = [
      {
        menuItem: "Создать курс",
        pane: (
          <Tab.Pane key="tab0">
            <CreateCourse cook_id={this.state.cook_id} />
          </Tab.Pane>
        )
      },

      {
        menuItem: "Создать тему",
        pane: (
          <Tab.Pane key="tab1">
            <CreateTopic subjects={subjects} cook_id={this.state.cook_id} />
          </Tab.Pane>
        )
      },

      {
        menuItem: "Создать лекцию",
        pane: (
          <Tab.Pane key="tab3">
            <CreateLecture cook_id={this.state.cook_id} />
          </Tab.Pane>
        )
      }
    ];
  }
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Конструктор
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Tab panes={this.panes} renderActiveOnly={false} />
      </div>
    );
  }
}
