
import React from "react";
import { Card, Icon} from "semantic-ui-react";
import { Link } from "react-router-dom";


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
            <Link to={{
              
              pathname: '/updatePost',
              id: id,
              title: title,
              body: body,
              }}><Icon name="edit" style={{cursor: 'pointer'}}/>
              Edit
            </Link>
          </div>
          <div onClick={()=>deletePost(id)} style={{cursor: 'pointer'}}>
            <Icon name="trash" />
              Delete
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default PostCard;
