import React from "react";
import { Grid, Dropdown, GridColumn } from "semantic-ui-react";

const group = [
  {
    key: "ООП, Инкапсуляция",
    value: "ООП, Инкапсуляция",
    text: "ООП, Инкапсуляция"
  },
  {
    key: "ООП, Полиморфизм",
    value: "ООП, Полиморфизм",
    text: "ООП, Полиморфизм"
  }
];
const TopicDropdown = () => (
  <Dropdown placeholder="Выберете Предмет" fluid selection options={group} />
);

export default TopicDropdown;
