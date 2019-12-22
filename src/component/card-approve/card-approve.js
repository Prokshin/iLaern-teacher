import React from "react";
import { Button, Card } from "semantic-ui-react";

const decline = id => {
  console.log("decline " + id);
};
const CardApprove = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.group}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button positive onClick={e => props.approve(props.id)}>
          Подтвердить
        </Button>
        <Button negative onClick={e => decline(props.id)}>
          Отклонить
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default CardApprove;
