import React from "react";
import { Grid, Dropdown, GridColumn } from "semantic-ui-react";

const group = [{ text: "Угату, ПРО-399" }, { text: "Угату, ПРО-299" }];
const GroupDropdown = () => (
  <Dropdown
    placeholder="Выберете группу"
    fluid
    search
    selection
    options={group}
  />
);

export default GroupDropdown;
