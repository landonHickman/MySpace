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

function App() {
  return (
    <>
    <NavBar />
    <FetchUser>
      <MAIN_CONTAINER>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/examples' component={Examples} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/userprofile/:id' component={UserProfile} />
        </Switch>
      </MAIN_CONTAINER>
    </FetchUser>
    </>
  );
}

export default App;
