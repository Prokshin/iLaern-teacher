import React from "react";
import { Dropdown } from "semantic-ui-react";

const group = [
  {
    key: "Угату, ПРО-399, ООП",
    value: "Угату, ПРО-399, ООП",
    text: "Угату, ПРО-399, ООП"
  },
  { text: "Угату, ПРО-299" }
];
const GroupDropdown = () => (
  <Dropdown
    placeholder="Выберете Предмет"
    fluid
    selection
    options={group}
    defaultValue={group[0].value}
  />
);

export default GroupDropdown;
