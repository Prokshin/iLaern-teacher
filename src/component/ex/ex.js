import React, { Component } from "react";
import {
  Header,
  Button,
  Form,
  Divider,
  Image,
  Grid,
  Segment
} from "semantic-ui-react";
import ExComment from "./comment";
import { withRouter } from "react-router-dom";
import { DataService } from "../../services/data-service";

class Ex extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    description: this.props.description,
    id_cook: 1,
    comments: []
  };
  comments = [
    {
      author: "Василий Платонович",
      text: "Здесь был вася"
    },
    {
      author: "Аркадий Эдуардович",
      text: "ХУЙ"
    }
  ];
  data = new DataService();
  constructor(props) {
    super(props);
    this.update();
  }

  update = () => {
    this.data.getCommentByEx(1, 1).then(res => {
      this.setState({
        id: res.exercise.id,
        name: res.exercise.name,
        description: res.exercise.description,
        id_cook: 1,
        comments: res.comments
      });
    });
  };

  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <Header color="teal" as="h2">
          {this.state.name}
        </Header>
        <p>{this.state.description}</p>
        <Divider horizontal>Комментарии</Divider>

        <Divider></Divider>
        <ExComment data={this.state.comments} />
        <Segment>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Header>Оценить</Header>
              <form
                className="ui form"
                action="http://localhost:8080/teacher/1/my-courses/OOP/to-check/1"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="field">
                  <input />
                </div>
                <button
                  class="ui animated button basic teal fluid"
                  type="submit"
                >
                  отправить
                </button>
              </form>
            </Grid.Column>
            <Grid.Column>
              <Header>Написать ошибки</Header>
              <form
                className="ui form"
                action="http://localhost:8080/teacher/1/my-courses/OOP/to-check/1/comment/1"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="field">
                  <textarea></textarea>
                </div>
                <button
                  class="ui animated button basic teal fluid"
                  type="submit"
                >
                  отправить
                </button>
              </form>
            </Grid.Column>
          </Grid>

          <Divider vertical>Или</Divider>
        </Segment>
      </div>
    );
  }
}

const ExWithRouter = withRouter(Ex);

export default ExWithRouter;
