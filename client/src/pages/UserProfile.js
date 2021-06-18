import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosOnMount from "../customHooks/useAxiosOnMount";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import UserCard from "../components/UserCard";
import { Card, Button} from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserForm from "./UserForm";
import PostCard from "../components/PostCard";

const UserProfile = (props) => {
  const { user, setUser, handleUpdate } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  const { data, loading, error} = useAxiosOnMount(
    `/api/users/${user.id}`
  );
  const { data: data1 } = useAxiosOnMount(
    `/api/users/${user.id}/posts`
  );


  const deleteUser = async (id) => {  
    setUser(null);
    history.push(`/register`);
    await axios.delete(`/api/users/${id}`);
  };

  const checkPosts = () => {
    if (data1.length === 0) {
      return (
        <Card
          style={{
            height: "100px",
            display: "flex",
            marginTop: '100px'
          }}
        >
          <Card.Content
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Card.Header>No Posts</Card.Header>
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <div>
          {
            <Card.Group
              itemsPerRow={1}
              style={{
                display: "flex",
                flexDirection: "column",
                flexFlow: "wrap",
                maxWidth: "800px",
              }}
            >
              {data1.map((d) => (
                <PostCard key={d.id} {...d} />
              ))}
            </Card.Group>
          }
        </div>
      );
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ marginBottom: "10px", marginRight: "10px" }}>
          <h1>{data.name}'s Profile</h1>
          <Card.Group style={{ marginBottom: "5px" }}>
            <UserCard {...data} />
          </Card.Group>
          <Button color="blue" onClick={() => setShowForm(!showForm)}>
            Edit
          </Button>
          <Button color="red" onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
          {showForm && <UserForm handleUpdate={handleUpdate} />}
        </div>
        {checkPosts()}
      </div>
    </div>
  );
};

export default UserProfile;
