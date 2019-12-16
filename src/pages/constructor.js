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

export default class ConstructorPage extends Component {
  data = new DataService();
  panes = [];
  state = {
    subjects: []
  };
  constructor(props) {
    super(props);
    this.updateSubjects();
  }

  updateSubjects() {
    this.data
      .getSubjects()
      .then(res => {
        this.updatePanes(res);
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
        menuItem: "Создать тему",
        pane: (
          <Tab.Pane key="tab1">
            <SubjectDropdown subjects={subjects} />
            <Input placeholder="Название темы" />
            <Button color="teal" style={{ marginLeft: "10px" }}>
              Создать
            </Button>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Создать тест",
        pane: (
          <Tab.Pane key="tab2">
            <TopicDropdown s={subjects} />
            <Divider horizontal></Divider>

            <Form>
              <Button>Создать</Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Создать статью",
        pane: (
          <Tab.Pane key="tab3">
            <TopicDropdown />
            <Divider horizontal></Divider>
            <Form>
              <TextArea placeholder="Текст статьи" />
              <Divider horizontal></Divider>
              <Button>Отправить</Button>
              <Divider horizontal></Divider>
            </Form>

            <div>
              <label for="file" className="ui icon button  teal">
                <i className="linkify icon"></i> Прикрепить файл
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
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
