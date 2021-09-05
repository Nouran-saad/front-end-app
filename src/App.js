import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import axios from 'axios';
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
          </Switch>
        </div>
    </Router>
  );
}
/*
function testBack(){
  axios.post('http://localhost:4000/login')
  .then(res=>{
    console.log('Heyyyyy');
  })
  .catch(err=>{
    console.log(err);
  })
  console.log('hiii');
}
*/
export default App;
