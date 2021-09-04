import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const test = ()=>{
    alert('test');
  }

  return (
    <div className="App">
      <p>Hello</p>
      <button type="button" class="btn btn-primary btn-rounded" onClick={test}>Primary</button>
    </div>
  );
}

export default App;
