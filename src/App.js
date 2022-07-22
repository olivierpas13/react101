import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <div>
      <Mensaje msg = "HO"></Mensaje>
      <Mensaje  color = 'red' msg = "LA"></Mensaje>
      <Mensaje msg = "MUNDO"></Mensaje>
      </div>
    </div>
  );
}

export default App;
