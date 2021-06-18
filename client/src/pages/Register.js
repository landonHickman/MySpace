import React, {useContext} from 'react'
import {Form} from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Register = () => {
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory()
  //passing handleRegister from AuthContext
  const {handleRegister} = useContext(AuthContext)
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value

  const name = useFormInput('', 'Name')
  const email = useFormInput('', 'Email')
  const password = useFormInput('', 'Password')
  const ConfirmPassword = useFormInput('', 'Confirm Password')
  const image = 'https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg'

  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault()
    //Front end validation
    if(password.value !== ConfirmPassword.value || password.value.length < 6){
      if(password.value !== ConfirmPassword.value){
        alert('Passwords do not Match!')
      }else{
        alert('Password must be longer than 6 characters.')
      }
    }else{
      handleRegister({name: name.value, email: email.value, password: password.value, image: image}, history)
    }

  }
  return(
    <>
    <h1>Create User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...name} label='Name'/>
        {/* Spread out over variable to pass down the items in the useFormInput('', 'Email').
        pattern is used describe what is necessary to get a proper email.*/}
        <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
        <Form.Input {...password} type='password'/>
        <Form.Input {...ConfirmPassword} placeholder='Confirm Password'/>
        <Form.Button color='blue'>Submit</Form.Button>
      </Form>
    </>
  )
}

export default Register