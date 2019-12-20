import React from "react";
import { Dropdown } from "semantic-ui-react";

const SubjectDropdown = props => {
  const data = props.subjects.map(data => {
    return {
      key: data.id,
      value: data.name,
      text: data.name
    };
  });
  const style = {
    marginBottom: "10px"
  };
  return (
    <Dropdown
      onChange={props.select}
      style={style}
      placeholder="Выберете Предмет"
      fluid
      selection
      options={data}
    />
  );
};

export default SubjectDropdown;
