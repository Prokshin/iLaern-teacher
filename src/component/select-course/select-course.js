import React from "react";
import SD from "../subject-dropdawn/subject-dropdown";
import { DataService } from "../../services/data-service";

export default class SelectCourse extends React.Component {
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = { name: "", id: "", value: "" };
  }

  onSelect = event => {
    this.setState({ value: event.target.value });
    console.log(event.target.children);
    this.props.onSelect(event.target.value);
  };

  render() {
    console.log(this.props.subject);
    let a = this.props.subject?.map(n => {
      return <option value={n.name}>{n.name}</option>;
    });
    console.log(a);
    return (
      <select
        class="ui dropdown"
        value={this.state.value}
        onChange={this.onSelect}
      >
        <option selected="selected">Выберите нужный параметр</option>
        {a}
      </select>
    );
  }
}
