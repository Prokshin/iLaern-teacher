import React from "react";
import SelectCourse from "../select-course/select-course";
import { DataService } from "../../services/data-service";

export default class CreateLecture extends React.Component {
  data = new DataService();
  state = {
    text: "",
    full: [{ divisions: [] }],
    course: null,
    division: null
  };
  constructor(props) {
    super(props);
    this.update();
  }
  onSelectCourse = ids => {
    console.log(ids);
    console.log(this.state.full[0]);
    this.setState({
      course: ids
    });
  };
  onSelectDiv = ids => {
    console.log(ids);
    console.log(this.state.full);
    this.setState({
      division: ids
    });
  };
  update = () => {
    this.data.getCourses().then(res => {
      this.setState({
        full: res.courses
      });
    });
  };

  mapDivision = () => {
    return this.state.full.filter(el => el.id == this.state.course)[0]
      ?.divisions;
  };

  onSubmit = event => {
    alert(`статья ${this.state}, успешно создан`);
    event.preventDefault();
  };

  onChangeDescription = event => {
    this.setState({ text: event.target.value });
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <form class="ui form" onSubmit={this.onSubmit}>
        <SelectCourse
          subject={this.state.full}
          onSelect={this.onSelectCourse}
        />
        <SelectCourse
          subject={this.mapDivision()}
          onSelect={this.onSelectDiv}
        />
        <div class="field">
          <label class="ui inverted">Название</label>
          <div class="ui left  input">
            <input
              type="text"
              name="userName"
              placeholder="название"
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
        </div>
        <div class="field">
          <label>Текст статьи</label>
          <div class="ui left input">
            <textarea
              type="textarea"
              name="description"
              placeholder="текст статьи, вы можете использовать html теги"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
        </div>

        <button
          type="submit"
          class="ui animated button basic teal fluid"
          tabindex="0"
        >
          <div class="visible content">Создать</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </button>
      </form>
    );
  }
}