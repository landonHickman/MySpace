import React, {useContext} from 'react'
import {Form} from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Login = () => {
  //call history from react-router-dom so that we can pass it to AuthProvider so it can be used
  //in that file
  const history = useHistory()
  //passing handleLogin from AuthContext
  const {handleLogin} = useContext(AuthContext)
  //using the custom form input hook(initial value in field, label and placeholder for input)
  //need to drill down to get value. i.e. email.value
  const email = useFormInput('', 'Email')
  const password = useFormInput('', 'Password')
  
  
  const handleSubmit = (e) => {
    //prevents page from refreshing
    e.preventDefault()
    //Front end validation
    //need to drill down to get value. i.e. email.value
    handleLogin({email: email.value, password: password.value}, history)
  }
  return(
    <>
    <h1>User Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...email}/>
        <Form.Input {...password} type='password'/>
        <Form.Button color='blue'>Submit</Form.Button>
      </Form>
    </>
  )
}

export default Login