import React from "react";
import { Card, Icon } from "semantic-ui-react";

const PostCard = (props) => {
  
      return (
        <div key={props.id} style={{display: 'flex', flexDirection: 'column'}}>
          <Card style={{padding: '10px', margin: '10px'}}>
            <Card.Content >
              <Card.Header>{props.title}</Card.Header>
            </Card.Content>
            <Card.Description>
              {props.body}
            </Card.Description>
            <Card.Content extra>
                <Icon name="edit" />
                  Edit
                <Icon name="trash" />
                  Delete
            </Card.Content>
          </Card>
        </div>
      );
    
  

  return (
    <>
      {/* {renderCard()} */}
    </>
  )
};
export default PostCard;
