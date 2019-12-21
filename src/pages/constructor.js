import React, { Component } from "react";
import {
  Header,
  Button,
  Form,
  TextArea,
  List,
  Input,
  Tab,
  Divider
} from "semantic-ui-react";
import TopicDropdown from "../component/topic-dropdown/topic-dropdown";
import SubjectDropdown from "../component/subject-dropdawn/subject-dropdown";
import { DataService } from "../services/data-service";
import CreateCourse from "../component/forms/createCourse";
import CreateTopic from "../component/forms/createTopic";
import CreateTest from "../component/create-test/create-test";
import CreateLecture from "../component/forms/create-lecture";
export default class ConstructorPage extends Component {
  data = new DataService();
  panes = [];
  state = {
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
            <CreateCourse />
          </Tab.Pane>
        )
      },

      {
        menuItem: "Создать тему",
        pane: (
          <Tab.Pane key="tab1">
            <CreateTopic subjects={subjects} />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Создать тест",
        pane: (
          <Tab.Pane key="tab2">
            <Divider horizontal></Divider>

            <Form>
              <CreateTest />
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Создать статью",
        pane: (
          <Tab.Pane key="tab3">
            <CreateLecture />
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
