import React, { useContext } from 'react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import { AuthContext } from '../providers/AuthProvider'
import { Card } from 'semantic-ui-react'
import UserCard from '../components/UserCard'

const Home = () => {
  const {user} = useContext(AuthContext)

  const {data, error, loading, setData} = useAxiosOnMount('/api/users')

  const removeCurrentUser = (id) => {
    setData(data.filter(d=> d.id !== id))
  }

  // removeCurrentUser(user.id)
  console.log(data)
  return(
    <div style={{textAlign: 'center'}}>
      <Card.Group itemsPerRow={4}>
        {data.map(d => <UserCard key={d.id} {...d}/>)}
      </Card.Group>
    </div>
  )
}

export default Home