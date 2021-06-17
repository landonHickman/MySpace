import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const UserCard = (props) => {
  return (
    <>
      <Card>
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="mail" />
            {props.email}
          </a>
        </Card.Content>
      </Card>
    </>
  );
};
export default UserCard;
