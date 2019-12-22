import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", level: "" };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    alert(`Курс ${this.state.name}, успешно создан`);
    event.preventDefault();
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
              value={this.state.password}
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
