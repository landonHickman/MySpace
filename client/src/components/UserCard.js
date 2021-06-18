import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const UserCard = (props) => {
  if(!props){
    return <h1>No Users</h1>
  }
  return (
    <>
      <Card style={{maxWidth: '300px', minWidth: '150px'}}>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
            <Icon name="mail" />
            {props.email}
        </Card.Content>
      </Card>
    </>
  );
};
export default UserCard;
