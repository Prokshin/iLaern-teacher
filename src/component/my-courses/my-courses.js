import React, { Component } from "react";
import { Card, Header } from "semantic-ui-react";
import { DataService } from "../../services/data-service";

export default class MyCourses extends Component {
  items = [
    {
      header: "Course A",
      description: "Course A",
      meta: "Beginner"
    },
    {
      header: "CourseB",
      description: "CourseB",
      meta: "Beginner"
    },
    {
      header: "CourseC",
      description: "CourseC",
      meta: "Beginner"
    }
  ];
  data = new DataService();

  state = {
    items: []
  };

  constructor() {
    super();
    this.update();
  }

  update = () => {
    this.data.getMyCourse(1).then(res => {
      let b = res.courses.map(a => {
        return {
          header: a.name,
          description: a.description,
          meta: a.level
        };
      });
      this.setState({
        items: b
      });
    });
  };

  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Мои курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Card.Group items={this.state.items} textAlign="center" />
      </div>
    );
  }
}
