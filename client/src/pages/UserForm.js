import React, { useContext } from "react";
import { Form } from "semantic-ui-react";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const UserForm = () => {
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory();
  //passing handleUpdate from AuthContext
  const { handleUpdate, user } = useContext(AuthContext);
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  const name = useFormInput(`${user.name}`, "Name");
  const image = useFormInput("", "Image");

  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault();
    //Front end validation
    handleUpdate(
      {
        name: name.value,
        image:
          image.value === ""
            ? "https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
            : image.value,
        id: user.id,
      },
      history
    );
  };
  return (
    <>
      <h1>Edit {}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...name} label="Name" />
        {/* Spread out over variable to pass down the items in the useFormInput('', 'Email').
        pattern is used describe what is necessary to get a proper email.*/}
        <Form.Input {...image} placeholder="Enter Image Address" />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    </>
  );
};

export default UserForm;
