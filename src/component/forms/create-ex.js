import React from "react";
import SelectCourse from "../select-course/select-course";
import { DataService } from "../../services/data-service";
import SelectTHeme from "../select-course/select-theme";

export default class CreateEx extends React.Component {
  data = new DataService();
  state = {
    text: "",
    full: [{ divisions: [] }],
    themes: [{}],
    lectures: [{}],
    course: null,
    division: null,
    lec: null
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
    this.data.getAllThemes(1, "ids").then(res => {
      this.setState({
        themes: res.themes
      });
    });
  };
  onSelectDiv = ids => {
    this.setState({
      division: ids
    });
  };
  update = () => {
    this.data.getCourses(1).then(res => {
      this.setState({
        full: res.courses
      });
    });
    this.data.getLecture().then(res => {
      this.setState({
        lectures: res.lectures
      });
    });
  };
  onSelectLec = ids => {
    const id = this.state.lectures.filter(n => {
      console.log(ids);
      return n.name == ids;
    });
    console.log(id[0].id);
    this.setState({
      lec: id[0].id
    });
  };

  mapDivision = () => {
    return this.state.full.filter(el => el.id === this.state.course)[0]
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
    console.log(this.state.themes);
    return (
      <form
        class="ui form"
        action={`http://localhost:8080/teacher/${this.props.cook_id}/courses/${this.state.course}/${this.state.division}/lecture`}
        method="POST"
        enctype="multipart/form-data"
      >
        <label class="ui inverted">Выберете курс</label>
        <SelectCourse
          subject={this.state.full}
          onSelect={this.onSelectCourse}
        />
        <label class="ui inverted">Выберете тему</label>
        <SelectCourse subject={this.state.themes} onSelect={this.onSelectDiv} />

        <label class="ui inverted">Выберете лекцию</label>
        <SelectCourse
          subject={this.state.lectures}
          onSelect={this.onSelectLec}
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
          <label>Текст задачи</label>
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
