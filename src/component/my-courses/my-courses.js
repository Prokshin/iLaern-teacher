import React, { Component } from "react";
import { Card, Header, Divider } from "semantic-ui-react";

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
  render() {
    return (
      <div>
        <Header as="h1" color={"red"} textAlign="center">
          Мои курсы
        </Header>
        <h4 class="ui horizontal divider">
          <i class="angle down red icon"></i>
        </h4>
        <Card.Group items={this.items} textAlign="center" />
      </div>
    );
  }
}
