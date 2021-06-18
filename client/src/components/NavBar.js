import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext} from '../providers/AuthProvider'
// import styled from 'styled-components'
// import { BORDER_RADIUS, FONT_SIZES, NAV_BACKGROUND, TEXT_COLOR, WHITE_BACKGROUND } from '../styles/styles'

const NavBar = () => {
  //used to set which link is active
  const {pathname} = useLocation()
  //used to send to another link
  const history = useHistory()
  // authenticated used to see if user is logged in or not.
  // handleLogout logs user out
  const {authenticated, handleLogout, user} = useContext(AuthContext)
  // function to position the navbar.
  // also has an if else to check for user to see what is needed to display.
  const getLoginNav = () => {
    if(authenticated){
      return(
        <>
        <Menu.Menu position='left'>
          <Link to='/'><Menu.Item active={pathname=== '/'}>Home</Menu.Item></Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Link to='/createPost'><Menu.Item active={pathname=== '/createPost'}>Create Post</Menu.Item></Link>
          <Link to='/users/profile'><Menu.Item active={pathname=== '/users/profile'}>{user.name}</Menu.Item></Link>
          <Menu.Item onClick={()=>handleLogout(history)}>Logout</Menu.Item>
        </Menu.Menu>
        </>
      )
    }else{
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Menu.Item active={pathname=== '/register'}>Register</Menu.Item>
          </Link>
          <Link to='/login'>
            <Menu.Item active={pathname=== '/login'}>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }
  //this is what is being returned by the NavBar function. if you want it to show up it needs to pass
  //through here eventually.
  return(
    <>
      <Menu pointing secondary>
        {getLoginNav()}
      </Menu>
    </>
  )
}

// Custom NavBar styling
// <NavContainer >
//   <NavLink to='/'>Home</NavLink>
//   <NavLink to='/examples'>Examples</NavLink>
//   <NavLink to='/about'>About</NavLink>
//   <NavLink to='/tests'>Tests</NavLink>
// </NavContainer>

// const NavContainer = styled.div`
//   font-size: ${FONT_SIZES.MEDIUM};
//   display: flex;
//   flex-direction: row;
//   justify-Content: flex-start;
//   background-color: ${NAV_BACKGROUND};
//   border-bottom: 1px solid ${NAV_BACKGROUND};
//   border-bottom-left-radius: ${BORDER_RADIUS};
//   border-bottom-right-radius: ${BORDER_RADIUS};
// `
// const NavLink = styled(Link)`
//   padding: 8px 10px 8px 10px;
//   text-decoration: none;
//   color: ${TEXT_COLOR};
//   background-color: ${WHITE_BACKGROUND};
//   margin: 2px 1px 2px 2px;
//   border: 0px;
//   border-radius: ${BORDER_RADIUS};

//   &:hover {
//     text-decoration: underline;
//   }
// `

export default NavBar