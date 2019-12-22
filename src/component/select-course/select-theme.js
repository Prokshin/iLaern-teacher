import React from "react";

import { DataService } from "../../services/data-service";

export default class SelectTHeme extends React.Component {
  data = new DataService();
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
      name: "",
      id: "",
      value: "",
      d: this.props.subject
    };
  }
  mapDivision = r => {
    return r.filter(el => el.id === this.state.course)[0]?.divisions;
  };

  update = () => {
    this.data.getCourses().then(res => {});
  };

  onSelect = event => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
    this.props.onSelect(event.target.value);
  };

  render() {
    console.log(this.state.d);
    let a = this.state.d?.map(n => {
      return <option value={n.id}>{n.name}</option>;
    });
    console.log(a);
    return (
      <select
        class="ui dropdown"
        value={this.state.value}
        onChange={this.onSelect}
      >
        {a}
      </select>
    );
  }
}
