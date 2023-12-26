import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Search from './Pages/Search';
import Profile from './Pages/Profile';
import NowPlaying from './Pages/NowPlaying';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Share from './Pages/Share';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'><SignUp /></Route>
        <Route exact path='/login'><Login /></Route>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/search'><Search /></Route>
        <Route exact path='/play'><NowPlaying /></Route>
        <Route exact path='/account'><Profile /></Route>
        <Route exact path='/sharevia'><Share /></Route> 
      </Switch>
      
    </div>
  );
}

export default App;
