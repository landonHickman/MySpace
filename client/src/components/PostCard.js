import React from "react";
import { Card, Icon } from "semantic-ui-react";

const PostCard = (props) => {

  return (
    <div key={props.id} style={{margin: '0px'}}>
      <Card style={{padding: '10px', margin: '10px', height: '220px'}}>
        <Card.Content >
          <Card.Header>{props.title}</Card.Header>
        </Card.Content>
          {props.body}
        <Card.Content extra>
            <Icon name="edit" />
              Edit
            <Icon name="trash" />
              Delete
        </Card.Content>
      </Card>
    </div>
  );
};
export default PostCard;
