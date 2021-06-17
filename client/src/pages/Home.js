import React from 'react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import RenderData from '../components/RenderData'

const Home = () => {
  //FIXME: dont know if im using the correct route.
  const {data, error, loading} = useAxiosOnMount('/api/auth/sign_in')
  console.log(data)
  return(
    <div style={{textAlign: 'center'}}>
      {/* FIXME: doesnt work currently */}
      <RenderData data={data}/>
    </div>
  )
}

export default Home