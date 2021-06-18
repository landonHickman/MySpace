import React,{useContext, useState} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import UserCard from '../components/UserCard'
import {Card, Button} from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import UserForm from './UserForm'

const UserProfile = (props) => {
  const {user, handleLogout, setUser, handleUpdate} = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false)
  const history = useHistory()


  const {data, loading, error, setData} = useAxiosOnMount(`/api/users/${user.id}`)

  const deleteUser = async (id) => {
    setUser(null)
    history.push(`/register`)
    await axios.delete(`/api/users/${id}`)

  } 

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>
  return(
    <div>
      <h1>{data.name}'s Profile</h1>
      <Card.Group style={{marginBottom: '10px'}}>
        <UserCard {...data}/>
      </Card.Group>
      <Button color="blue" onClick={()=>setShowForm(!showForm)}>Edit</Button>
      <Button color="red" onClick={()=>deleteUser(user.id)}>Delete</Button>
      {showForm && <UserForm handleUpdate={handleUpdate}/>}
    </div>
  )
}

export default UserProfile