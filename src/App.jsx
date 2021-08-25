import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">

      <div className="grid_container">
        <div className="sidebar">
          <User />
          </div>
          <div className="main"></div>
        </div>

      </div>
  );
}

export default App;
