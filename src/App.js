import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

function App() {

  const test = ()=>{
    alert('test');
  }



  return (
    <div className="App">
      <p>Hello</p>
      <button type="button" className="btn btn-primary btn-rounded" onClick={test}>Primary</button>
      <br></br><br></br><br></br>
      <button type="button" className="btn btn-primary btn-rounded" onClick={testBack}>Test Backend</button>
    </div>
  );
}

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

export default App;
