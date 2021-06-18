import React from 'react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import { Card } from 'semantic-ui-react'
import UserCard from '../components/UserCard'

const Home = () => {

  const {data} = useAxiosOnMount('/api/users')

  return(

    <div style={{textAlign: 'center'}}>
      <Card.Group itemsPerRow={4}>
        {data.map(d => <UserCard key={d.id} {...d}/>)}
      </Card.Group>
    </div>
  )
}

export default Home