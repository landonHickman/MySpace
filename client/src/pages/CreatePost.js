import React, { useContext } from 'react'
import {  Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory } from 'react-router'

const CreatePost = () => {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const title = useFormInput('Title of Post', 'Title')
  const body = useFormInput('Body', 'Body')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title.value)
    console.log(body.value)
    try{
      let res = await axios.post(`/api/users/${user.id}/posts`, {title: title.value, body: body.value})
      console.log(res.data)
      history.push('/users/profile')
    }catch(err){
      alert('error')
      console.log(err)
      console.log(err.response)
    }
  }
  return(
    <div >
      <h1>Create Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...title}/>
        <Form.TextArea {...body} />

        <Form.Button color='blue'>Submit</Form.Button>
      </Form>
    </div>
  )
}
export default CreatePost