import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';
import Trains from './components/Trains';
import Payment from './components/Payment';
import MoreInfo from './components/MoreInfo';
import Profile from './components/Profile';
import Ticket from './components/Ticket';

function App() {

  return (
    
    <Router>
      <div className="App">
      
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/create">
              <CreateAccount />
            </Route>
            <Route exact path="/trains">
              <Trains />
            </Route>
            <Route exact path="/moreInfo">
              <MoreInfo />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/ticket">
              <Ticket />
            </Route>
            <Route path="*">
              <h1 style={{marginTop:'250px'}}>404 Page</h1>
              <a href="/" style={{color:'white'}}>Return to login page</a>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
