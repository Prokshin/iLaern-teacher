import React from "react";
import { Comment, Icon, Segment, Header } from "semantic-ui-react";

export default function ExComment(props) {
  const el = props.data.map(n => (
    <Segment color="teal">
      <Comment>
        <Comment.Content>
          <Comment.Author>
            <Header>
              <Icon name="user circle" />
              {n.author}
            </Header>
          </Comment.Author>
          <Comment.Text>{n.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    </Segment>
  ));

  return (
    <div>
      <Comment.Group size="large">{el}</Comment.Group>
    </div>
  );
}
