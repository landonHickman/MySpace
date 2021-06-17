import React, { useContext } from 'react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import RenderData from '../components/RenderData'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
  const {user} = useContext(AuthContext)

  const {data, error, loading} = useAxiosOnMount('/api/users')
  console.log(data)
  return(
    <div style={{textAlign: 'center'}}>
      <RenderData data={data}/>
    </div>
  )
}

export default Home