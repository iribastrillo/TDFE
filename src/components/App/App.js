import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import './App.css';
import Dashboad from './Dashboard/Dashboard';
import Login from './Login';

function App() {
  const user = useSelector ((state) => state.session.value)
  return (
    <div className="App">
      {user === undefined ? <Login/> : <Dashboad/>}
    </div>
  );
}

export default App;
