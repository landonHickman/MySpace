import React, { useContext } from 'react'
import {  Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'


const UpdatePost = (props) => {
  const location = useLocation()
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const title = useFormInput(location.title, 'Title')
  const body = useFormInput(location.body, 'Body')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.put(`/api/users/${user.id}/posts/${location.id}`, {title: title.value, body: body.value})
      history.push('/users/profile')
    }catch(err){
      alert('error')
      console.log(err)
      console.log(err.response)
    }
  }
  return(
    <div >
      <h1>Update Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...title}/>
        <Form.TextArea {...body} />

        <Form.Button color='blue'>Submit</Form.Button>
      </Form>
    </div>
  )
}
export default UpdatePost