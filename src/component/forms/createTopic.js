import React from "react";
import SD from "../subject-dropdawn/subject-dropdown";
import { DataService } from "../../services/data-service";

export default class TopicForm extends React.Component {
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = { name: "", course: "" };

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSubmit(event) {
    alert(`Курс ${this.state.name},${this.state.course} успешно создан`);
    event.preventDefault();
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onSelect(gg) {
    //
    console.log(gg.target);
    this.setState({ course: gg.target.textContent });
  }

  render() {
    return (
      <div>
        <SD subjects={this.props.subjects} select={this.onSelect} />
        <form class="ui form" onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}
