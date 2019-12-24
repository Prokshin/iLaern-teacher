import React from "react";

import { DataService } from "../../services/data-service";
import SelectCourse from "../select-course/select-course";

export default class TopicForm extends React.Component {
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = { name: "", course: "", full: [{}] };
    this.update();
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSubmit(event) {
    this.data.postCreateTheme(this.props.cook_id, this.state.course, {
      name: this.state.name
    });
    alert(`Тема ${this.state.name},${this.state.course} успешно создана`);
    event.preventDefault();
  }

  onSelectCourse = id => {
    console.log(id);
    console.log(this.state.full.filter(n => n.id == id).name);
    this.setState({
      course: id
    });
  };

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }
  update = () => {
    this.data.getCourses(this.props.cook_id).then(res => {
      this.setState({
        full: res.courses
      });
    });
  };
  onSelect(gg) {
    //
    console.log(gg.target);
    this.setState({ course: gg.target.textContent });
  }
  render() {
    console.log(this.props.cook_id);
    return (
      <div>
        <SelectCourse
          subject={this.state.full}
          onSelect={this.onSelectCourse}
        />
        <form class="ui form" onSubmit={this.onSubmit}>
          <div class="field">
            <label class="ui inverted">Название</label>
            <div class="ui left  input">
              <input
                type="text"
                name="userName"
                placeholder="Название темы курса"
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
