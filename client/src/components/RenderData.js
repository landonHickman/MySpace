import React from 'react'
import UserCard from './UserCard'
import { Card } from 'semantic-ui-react'

//pass in data i.e. data={data} then it outputs a mapped over array in jsx.
const RenderData = ({data}) => {
  return(
  <Card.Group itemsPerRow={4}>
    {data.map(d => <UserCard key={d.id} {...d}/>)}
  </Card.Group>
  )
}
export default RenderData