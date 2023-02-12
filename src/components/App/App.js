import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const user = useSelector ((state) => state.session.value)
  return (
    <div className="App">
      {user === undefined ? <Login/> : <Dashboard/>}
    </div>
  );
}

export default App;
