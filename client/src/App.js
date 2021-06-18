import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Examples from './pages/Examples';
import {MAIN_CONTAINER} from './styles/styles'
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectToUserProfile from './components/RedirectToUserProfile';
import PostCard from './components/PostCard';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <>
    <NavBar />
    <FetchUser>
      <MAIN_CONTAINER>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/examples' component={Examples} />
          <ProtectedRoute exact path='/postCard' component={PostCard} />
          <ProtectedRoute exact path='/createPost' component={CreatePost} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/redirectToUserProfile' component={RedirectToUserProfile} />
          <ProtectedRoute exact path='/users/profile' component={UserProfile} />
        </Switch>
      </MAIN_CONTAINER>
    </FetchUser>
    </>
  );
}

export default App;
