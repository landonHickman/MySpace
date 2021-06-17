import React,{useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import UserCard from '../components/UserCard'
import {Card, Button} from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const UserProfile = (props) => {
  const {user, handleLogout, setUser} = useContext(AuthContext)
  const history = useHistory()
  console.log(user)

  const {data, loading, error, setData} = useAxiosOnMount(`/api/users/${user.id}`)

  const deleteUser = async (id) => {
    setUser(null)
    history.push(`/register`)

    let res = await axios.delete(`/api/users/${id}`)

  } 

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>
  return(
    <div>
      <h1>{data.name}'s Profile</h1>
      <Card.Group style={{marginBottom: '10px'}}>
        <UserCard {...data}/>
      </Card.Group>
      <Button color="red" onClick={()=>deleteUser(user.id)}>Delete</Button>
    </div>
  )
}

export default UserProfile