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
          // <Tab.Pane key="tab2">
          //   <form class="ui form" onSubmit={this.handleSubmit}>
          //     <div class="field">
          //       <label class="ui inverted">Название</label>
          //       <div class="ui left input">
          //         <input
          //           type="text"
          //           name="name"
          //           placeholder="Название"
          //           required
          //         />
          //       </div>
          //     </div>
          //     <div class="field">
          //       <label>Необходимый уровень студентов</label>
          //       <div class="ui left  input">
          //         <input
          //           type="text"
          //           name="level"
          //           placeholder="Уровень"
          //           required
          //         />
          //       </div>
          //     </div>
          //     <div class="field">
          //       <label>Краткое описание курса</label>
          //       <div class="ui left input">
          //         <input
          //           type="text"
          //           name="level"
          //           placeholder="Описание"
          //           required
          //         />
          //       </div>
          //     </div>
          //     <input
          //       class="ui animated button basic teal fluid"
          //       type="submit"
          //       value="Отправить"
          //     />
          //   </form>
          // </Tab.Pane>
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
