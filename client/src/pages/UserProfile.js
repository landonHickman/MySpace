import React,{useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RenderData from '../components/RenderData'
import StringifyJSON from '../components/StringifyJSON'
import UserCard from '../components/UserCard'
import {Card} from 'semantic-ui-react'


const UserProfile = (props) => {
  const {user} = useContext(AuthContext)
  console.log(user)

  const {data, loading, error} = useAxiosOnMount(`/api/users/${user.id}`)

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>

  return(
    <div>
      <h1>{data.name}'s Profile</h1>
      <Card.Group>
        <UserCard {...data}/>
      </Card.Group>
    </div>
  )
}

export default UserProfile