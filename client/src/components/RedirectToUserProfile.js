import React from 'react'
import { useHistory } from 'react-router'

const RedirectToUserProfile = () => {
  const history = useHistory()
  history.push('/users/profile')
  return(
    <>
      <h1>Redirecting</h1>
    </>
  )
}
export default RedirectToUserProfile