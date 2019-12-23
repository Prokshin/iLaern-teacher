import React from "react";
import { DataService } from "../../services/data-service";

export default class LoginForm extends React.Component {
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", level: "beginer" };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    this.data.postCreateCourse(1, {
      name: this.state.name,
      description: this.state.description,
      level: this.state.level
    });
    alert(`Курс ${this.state.name}, успешно создан`);
    event.preventDefault();
  }
  onChangeLevel(event) {
    console.log(event.target.value);
    //this.setState({ level: event.target.value });
  }
  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form class="ui form" onSubmit={this.onSubmit}>
        <div class="field">
          <label class="ui inverted">Название</label>
          <div class="ui left  input">
            <input
              type="text"
              name="userName"
              placeholder="Название курса"
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
        </div>
        <div class="field">
          <label>Описание</label>
          <div class="ui left input">
            <textarea
              type="textarea"
              name="description"
              placeholder="Краткое описание курса"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
        </div>

        <div class="field">
          <label>Уровень</label>
          <div class="ui left input">
            <input
              type="text"
              name="level"
              placeholder="Уровень курса"
              required
              value={this.state.level}
              onChange={this.onChangeLevel}
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
