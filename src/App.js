import { Button } from '@material-ui/core';
import './App.css';


function App() {

  const test = ()=>{
    alert('test');
  }

  return (
    <div className="App">

      <p>Hello</p>
      <Button color="primary" onClick={test}>Hello World</Button>
        
    </div>
  );
}

export default App;
