import React from "react";
import { Card, Icon } from "semantic-ui-react";

const PostCard = ({deletePost, id, title, body}) => {

  return (
    <div key={id} style={{margin: '0px'}}>
      <Card style={{padding: '10px', margin: '10px', height: '220px'}}>
        <Card.Content >
          <Card.Header>{title}</Card.Header>
        </Card.Content>
          {body}
        <Card.Content extra style={{display: 'flex'}}>
          <div>
            <Icon name="edit" />
              Edit
          </div>
          <div onClick={()=>deletePost(id)}>
            <Icon name="trash" />
              Delete
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default PostCard;
