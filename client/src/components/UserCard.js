import React, { useContext, useState } from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import useAxiosOnMount from "../customHooks/useAxiosOnMount";
import { AuthContext } from "../providers/AuthProvider";

const UserCard = (props) => {
  const { user } = useContext(AuthContext);
  const [showPost, setShowPost] = useState(false);

  const { data: data1 } = useAxiosOnMount(
    `/api/users/${props.id}/posts`
  );

  // console.log('data1',data1)

  // console.log('userCard',props)
  const renderPosts = () => {
    if (data1.length === 0) {
      return <p>No Posts</p>;
    } else {
      return data1.map((d) => {
        return (
          <div
            key={d.id}
            style={{
              display: "flex",
              flexShrink: "1",
              margin: "3px",
              maxWidth: "290px",
            }}
          >
            <Card style={{ padding: "10px" }}>
              <Card.Content>
                <Card.Header>{d.title}</Card.Header>
              </Card.Content>
              <Card.Description>{d.body}</Card.Description>
            </Card>
          </div>
        );
      });
    }
  };

  if (props.id !== user.id) {
    return (
      <>
        <Card style={{ maxWidth: "300px", height: "auto" }}>
          <Image src={props.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Button onClick={() => setShowPost(!showPost)} color='blue'>
              <Icon name="angle double down" />
              Posts
            </Button>
          </Card.Content>
          {showPost && renderPosts()}
          <Card.Content extra>
            <Icon name="mail" />
            {props.email}
          </Card.Content>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card style={{ maxWidth: "300px", minWidth: "150px" }}>
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
  }
};
export default UserCard;
